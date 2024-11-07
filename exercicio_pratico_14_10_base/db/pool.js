const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  password: "password",
  port: 5432,
  database: "top_users",
});
