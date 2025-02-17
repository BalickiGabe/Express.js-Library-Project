const authors = [
  { id: 1, name: "Gabe" },
  { id: 2, name: "Erin" },
  { id: 3, name: "Tucker" },
];

async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

module.exports = { getAuthorById };
