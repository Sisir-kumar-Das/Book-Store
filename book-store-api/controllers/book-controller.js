const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.log(err);
  }

  if (!books) {
    return res.status(404).json({ message: "No boooks Found" });
  } else {
    return res.status(201).json({ books });
  }
};

const addBook = async (req, res, next) => {
  let book;
  try {
    book = new Book({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
      price: req.body.price,
      available: req.body.available,
      image: req.body.image,
    });
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to add." });
  }
  return res.status(201).json({ book });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No book found with the given id" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    res.status(400).json({ err });
  }
  if (!book) {
    return res.status(404).json({ message: "No book found with the given id" });
  }
  return res.status(201).json({ book });
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
    await book.save();
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Book is not there." });
  } else {
    return res.status(201).json({ message: "Book is  deleted sucessfully." });
  }
};
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
