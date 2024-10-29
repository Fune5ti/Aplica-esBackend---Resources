const { Pool } = require("pg");

module.exports = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_USER,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});
