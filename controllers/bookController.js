const expressAsyncHandler = require("express-async-handler");
const db = require("../db");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getBookById = expressAsyncHandler(async (req, res) => {
  const { bookId } = req.params;

  const book = await db.getBookById(Number(bookId));

  if (!book) {
    throw new CustomNotFoundError("Book Not Found");
  }

  res.send("Book Title: " + book.title);
});

module.exports = { getBookById };
