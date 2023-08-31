const requestBook = require('../models/requestBookModel')
const Book = require('../models/bookModel');

const createRequest = async (req, res) => {
    const { title, author, year, additionalComment } = req.body;
    const existingBook = await Book.findOne({ title });
    const alreadyRequested = await requestBook.findOne({title})
    if (existingBook) {
      return res.status(400).json({
        status: 'fail',
        message: 'A book with the same title already exists',
      });
    }

    if (alreadyRequested) {
      return res.status(400).json({
        status: 'fail',
        message: 'A book with the same title already exists',
      });
    }
  
    try {
      const newRequest = await requestBook.create({
        title, author, year, additionalComment
      });
      return res.status(201).json({
        status: 'success',
        data: newRequest,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: 'Error creating new book request',
      });
    }
  };

exports.createRequest = createRequest