const Review = require('../models/reviewModel');

const addReview = async (req, res) => {
  const { bookId, rating, reviewText } = req.body;

  try {
    const newReview = await Review.create({
      book: bookId,
      user: req.user.id, 
      rating,
      reviewText,
    });

    res.status(201).json({
      status: 'success',
      data: newReview,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error adding review',
    });
  }
};

const updateReview = async (req, res) => {
  const { rating, reviewText } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, {
      rating,
      reviewText,
    }, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: updatedReview,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error updating review',
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: 'Error deleting review',
    });
  }
};

exports.addReview = addReview
exports.updateReview = updateReview
exports.deleteReview = deleteReview