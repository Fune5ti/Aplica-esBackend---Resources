const router = require("express").Router();
const booksController = require("../controllers/booksController");

router.get("/all", booksController.getAllBooks);
router.post("/", booksController.createBook);
router.delete("/:bookId", booksController.deleteBook);

module.exports = router;
