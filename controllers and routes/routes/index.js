const express = require("express");
const booksRouter = require("./books");
const authorsRouter = require("./authors");

const router = express.Router();

router.use("/books", booksRouter);
router.use("/authors", authorsRouter);

module.exports = router;
