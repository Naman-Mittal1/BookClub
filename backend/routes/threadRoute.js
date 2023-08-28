const express = require('express');
const threadController = require('../controllers/threadController');
const { protect } = require('../middleware/authMiddleware'); 

const router = express.Router();

router.get('/', threadController.getAllThreads);
router.get('/:id', threadController.getThreadById);
router.post('/', protect, threadController.createThread);
router.post('/:id/comments', protect, threadController.addComment);

module.exports = router;
