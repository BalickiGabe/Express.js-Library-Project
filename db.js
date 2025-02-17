const expressAsyncHandler = require("express-async-handler");

const authors = [
  { id: 1, name: "Gabe" },
  { id: 2, name: "Erin" },
  { id: 3, name: "Tucker" },
];

const books = [
  { id: 1, title: "Gabe's Book", authorId: 1 },
  { id: 2, title: "Erin's Book", authorId: 2 },
  { id: 3, title: "Tucker's Book", authorId: 3 },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

const getBookById = expressAsyncHandler(async (bookId) => {
  return books.find((book) => book.id === bookId);
});

module.exports = { getAuthorById, getBookById };
