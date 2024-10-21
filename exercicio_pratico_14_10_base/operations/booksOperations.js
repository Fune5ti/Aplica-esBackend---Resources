const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, `${process.env.DATA_PATH}/books.json`);

function readBooks() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// Função para escrever os livros no arquivo JSON
function writeBooks(books) {
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2), "utf-8");
}

// Função para adicionar um novo livro
function addOneBook(newBook) {
  const books = readBooks();
  const nextId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
  const bookToAdd = { id: nextId, ...newBook };
  books.push(bookToAdd);
  writeBooks(books);
  return bookToAdd;
}

// Função para remover um livro por ID
function removeBook(bookId) {
  let books = readBooks();
  const filteredBooks = books.filter((book) => book.id !== bookId);
  if (filteredBooks.length === books.length) {
    return null; // Não encontrou o livro com o ID fornecido
  }
  writeBooks(filteredBooks);
  return bookId;
}

// Função para buscar livros por autor (ID do autor)
function findBooksByAuthor(authorId) {
  const books = readBooks();
  return books.filter((book) => book.authorId === authorId);
}

module.exports = {
  readBooks,
  writeBooks,
  addOneBook,
  removeBook,
  findBooksByAuthor,
};
