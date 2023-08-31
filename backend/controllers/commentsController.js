// controllers/comments.js

const Comment = require('../models/commentModel');

// @desc    Get comments for a book
// @route   GET /api/comments/:bookId
// @access  Public
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ book: req.params.bookId })
      .populate('user', 'name')

    res.json(comments);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

 
const createComment = async (req, res) => {
  try {
    const { text, bookId } = req.body;

    const newComment = new Comment({
      text, 
      book: bookId,
      user: req.user.id
    });

    const comment = await newComment.save();

    res.json(comment);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error'});
  }
};


const deleteComment = async (req, res) => {
   try {
    const comment = await Comment.findById(req.params.id);

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment not found' });
    }

    // Verify user owns comment
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }

    await comment.remove();

    res.json({ msg: 'Comment removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getComments = getComments
exports.createComment = createComment
exports.deleteComment = deleteComment