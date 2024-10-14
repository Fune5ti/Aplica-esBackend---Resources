const getBooks = async (req, res) => {
  res.json("/books");
};
const getBookById = async (req, res) => {
  const { bookId } = req.params;
  res.json("/books/" + bookId);
};
const checkIfBookIsReserved = async (req, res) => {
  const { bookId } = req.params;
  res.json("/books/" + bookId);
};
const reserveBook = async (req, res) => {
  const { bookId } = req.params;
  res.json("/books/" + bookId);
};

module.exports = {
  getBooks,
  getBookById,
  checkIfBookIsReserved,
  reserveBook,
};
