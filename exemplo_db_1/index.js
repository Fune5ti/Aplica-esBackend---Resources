const express = require("express");
require("dotenv").config();
const routes = require("./routes");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(routes);

app.listen(port, () =>
  console.log(`A aplicação está rodando no endereço: http://localhost:${port} `)
);
