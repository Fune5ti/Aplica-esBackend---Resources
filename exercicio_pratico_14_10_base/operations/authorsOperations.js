const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, `${process.env.DATA_PATH}/authors.json`);

// Função para ler os autores do arquivo JSON
function readAuthors() {
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// Função para escrever os autores no arquivo JSON
function writeAuthors(authors) {
  fs.writeFileSync(filePath, JSON.stringify(authors, null, 2), "utf-8");
}

// Função para adicionar um novo autor
function addOneAuthor(newAuthor) {
  const authors = readAuthors();
  const nextId = authors.length > 0 ? authors[authors.length - 1].id + 1 : 1;
  const authorToAdd = { id: nextId, ...newAuthor };
  authors.push(authorToAdd);
  writeAuthors(authors);
  return authorToAdd;
}

// Função para remover um autor por ID
function removeOneAuthor(authorId) {
  let authors = readAuthors();
  const filteredAuthors = authors.filter((author) => author.id !== authorId);
  if (filteredAuthors.length === authors.length) {
    return null; // Não encontrou o autor com o ID fornecido
  }
  writeAuthors(filteredAuthors);
  return authorId;
}

module.exports = { readAuthors, writeAuthors, addOneAuthor, removeOneAuthor };
