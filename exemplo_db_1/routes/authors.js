const router = require("express").Router();
const authorsController = require("../controllers/authorsController");

router.get("/all", authorsController.getAll);
router.post("/", authorsController.createAuthor);
router.delete("/:authorId", authorsController.deleteAuthor);

module.exports = router;
