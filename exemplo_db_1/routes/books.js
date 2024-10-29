const router = require("express").Router();
const booksController = require("../controllers/booksController");
const helloMiddleware = require("../midllewares/helloMidllware");

router.use(helloMiddleware);

router.get("/all", booksController.getAllBooks);
router.post("/", booksController.createBook);
router.delete("/:bookId", booksController.deleteBook);

module.exports = router;
