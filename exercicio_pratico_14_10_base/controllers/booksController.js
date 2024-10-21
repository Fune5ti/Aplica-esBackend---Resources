const {
  readBooks,
  addOneBook,
  removeBook,
} = require("../operations/booksOperations");

const getAllBooks = (req, res) => {
  const books = readBooks();
  res.json({
    success: true,
    books,
  });
};

const createBook = (req, res) => {
  if (!req.body.anoPublicacao || !req.body.titulo || !req.body.authorId) {
    return res.status(400).json("Corpo inesperado");
  }
  const { anoPublicacao, titulo, authorId } = req.body;

  const book = addOneBook({ anoPublicacao, titulo, authorId });

  if (isNaN(parseInt(authorId))) {
    return res.status(400).json("O ID do autor terá de ser um numero");
  }

  return res.status(201).json({
    books: readBooks(),
    createdBook: book,
  });
};

const deleteBook = (req, res) => {
  const { bookId } = req.params;
  const bookIdAsNumber = parseInt(bookId);

  if (isNaN(bookIdAsNumber)) {
    return res.status(400).json("O ID do livro terá de ser um numero");
  }

  const deletedBook = removeBook(bookIdAsNumber);

  if (!deletedBook) {
    return res.status(404).json("O livro que tentou apagar não existe");
  }

  res.json("Livro apagado com sucesso");
};
module.exports = {
  getAllBooks,
  createBook,
  deleteBook,
};
