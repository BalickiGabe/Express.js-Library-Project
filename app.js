const express = require("express");
const app = express();
const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);
app.use("/books", bookRouter);
app.use("/authors", authorRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
