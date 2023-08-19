const express = require("express");
const router = express.Router();
const booksController = require("../controllers/book-controller");

router
  .get("/", booksController.getAllBooks)
  .get("/:id", booksController.getById)
  .post("/", booksController.addBook)
  .put("/:id", booksController.updateBook)
  .delete("/:id", booksController.deleteBook);

module.exports = router;
