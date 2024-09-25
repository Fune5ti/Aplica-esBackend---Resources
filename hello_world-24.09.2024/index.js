require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.json('Hello World!');
 });

app.listen(port, () => {
    console.log(`App Running at http://localhost:${port}`);
});