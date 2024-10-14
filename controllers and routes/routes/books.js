const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

router.get("/", booksController.getBooks);
router.get("/:bookId", booksController.getBookById);
router.get("/:bookId/reserve", booksController.checkIfBookIsReserved);
router.post("/:bookId/reserve", booksController.reserveBook);

module.exports = router;
