const express=require("express");
const app = express();
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

let books = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "The Lord of the Rings", author: "J.R.R. Tolkien" }
];

// create a route to return all books
app.get("/books", (req, res) => {
  res.json(books);
});

// create a route to return a single book by id
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// create a route to add a new book
app.post("/books", (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1;
  books.push(newBook);
  res.status(201).json(newBook);
});

// create a route to update a book by id
app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  book.title = req.body.title;
  book.author = req.body.author;
  res.json(book);
});

app.listen(3000);