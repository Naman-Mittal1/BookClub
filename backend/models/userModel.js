const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true 
  },
  uploadedBooks: [{
    type: mongoose.Schema.Types.ObjectId, ref:"Book"
  }]
});

module.exports = mongoose.model('User', UserSchema);