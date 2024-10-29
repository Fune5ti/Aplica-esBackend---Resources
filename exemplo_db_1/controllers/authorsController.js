const {
  addOneAuthor,
  readAuthors,
  removeOneAuthor,
} = require("../operations/authorsOperations");

const getAll = (req, res) => {
  const authors = readAuthors();
  return res.status(201).send({
    success: true,
    authors,
  });
};

const createAuthor = (req, res) => {
  if (!req.body.nome) {
    return res
      .status(400)
      .send("Data missing from request body, should have nome");
  }
  const { nome } = req.body;
  addOneAuthor({ nome });
  res.json({
    success: true,
    authors: readAuthors(),
  });
};
const deleteAuthor = (req, res) => {
  const { authorId } = req.params;

  if (isNaN(authorId)) {
    return res.status(400).send("The ID should be a number");
  }

  const removed = removeOneAuthor(parseInt(authorId));

  if (removed === null) {
    return res
      .status(404)
      .send("The author you tried to delete does not exist");
  }

  return res.json({
    success: true,
    authors: readAuthors(),
  });
};

module.exports = {
  getAll,
  createAuthor,
  deleteAuthor,
};
