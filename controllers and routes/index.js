const express = require("express");
const app = express();
const routes = require("./routes");
require("dotenv").config();

const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => res.json("/"));
app.get("/about", (req, res) => res.json("/about"));
app.get("/contact", (req, res) => res.json("/contact"));
app.post("/contact", (req, res) => res.json("/contact"));

app.listen(port, () => {
  console.log("App running on port " + port);
});
