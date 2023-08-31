const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  userComments: [{
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Username is required field']
    },
    comment: {
        type: String,
        required: true
      },
    createdAt: {
      type: Date,
      default: Date.now
    }  
  }],
});

module.exports = mongoose.model('Book', bookSchema);
