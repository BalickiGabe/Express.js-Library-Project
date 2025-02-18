const express = require("express");
const app = express();
const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const aboutRouter = require("./routes/aboutRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//routes
app.use("/", indexRouter);
app.use("/about", aboutRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use(express.static(assetsPath));

//error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err);
});

//start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
