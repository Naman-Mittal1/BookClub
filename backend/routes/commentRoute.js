const express = require('express');

const commentsController = require("../controllers/commentsController")
const commentsRouter = express.Router();

const router = express.Router();

router.get('/:bookId', commentsController.getComments);

router.post('/', commentsController.createComment); 

router.delete('/:id', commentsController.deleteComment);

module.exports = commentsRouter;