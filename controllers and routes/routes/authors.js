const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authorsController");

router.get("/", authorsController.getAuthors);
router.get("/:authorId", authorsController.getAuthorById);

module.exports = router;
