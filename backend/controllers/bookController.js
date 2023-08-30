const Book = require('../models/bookModel');

const getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json({
        status: 'success',
        data: books,
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Error fetching books',
      });
    }
  };

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Book not found',
    });
  }
};

const addNewBook = async (req, res) => {
  const { title, author, genre, description, image, year } = req.body;
  console.log(req.body);
  const existingBook = await Book.findOne({ title });

  if (existingBook) {
      return res.status(400).json({
        status: 'fail',
        message: 'A book with the same title already exists',
    });
  }

  try {
    const newBook = await Book.create({
      title, author, genre, description, image, year
    });
    res.status(201).json({
      status: 'success',
      data: newBook,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error creating new book',
    });
  }
};


const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: updatedBook,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error updating book',
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error deleting book',
    });
  }
};

const searchBooks = async (req, res) => {
  const filters = req.query;
  
  try {
    const books = await Book.find();
    const filteredBooks = books.filter(book => {
      let isValid = true;
      for (key in filters) {
        isValid = isValid && book[key] == filters[key];
      }
      return isValid;
    });

    res.status(200).json({
      status: 'success',
      data: filteredBooks,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Error searching books',
    });
  }
};

exports.searchBooks = searchBooks;
exports.getAllBooks = getAllBooks
exports.getBookById = getBookById
exports.addNewBook = addNewBook
exports.updateBook = updateBook
exports.deleteBook = deleteBook