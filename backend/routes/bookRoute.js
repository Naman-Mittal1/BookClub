const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.addNewBook);
router.patch('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);
router.get('/search', bookController.searchBooks);


module.exports = router;
