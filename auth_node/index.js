const path = require("node:path");
const { Pool } = require("pg");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "database",
});
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const res = await pool.query("SELECT * FROM users WHERE username = $1", [
        username,
      ]);
      const user = res.rows[0];
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const res = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    const user = res.rows[0];
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.post("/sign-up", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      username,
      hashedPassword,
    ]);
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error registering user.", err });
  }
});

app.post(
  "/login",
  passport.authenticate("local", { failureMessage: true }),
  (req, res) => {
    res.json({ message: "Logged in successfully." });
  }
);

app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out." });
    }
    res.json({ message: "Logged out successfully." });
  });
});

app.get("/protected", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: "Access granted to protected resource." });
  } else {
    res.status(401).json({ message: "Unauthorized access." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
