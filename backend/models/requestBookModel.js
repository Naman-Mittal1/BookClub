const mongoose = require('mongoose');

const requestBookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  additionalComment: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('RequestBook', requestBookSchema);
