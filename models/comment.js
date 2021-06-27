const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true
  },
  commented_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true
  },
  commented_on: {
    type: Date,
    default: Date.now(),
    required: true
  },
  commented_raid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Raid',
    required: true
  }
});

const Comment = new mongoose.model('Comment', CommentSchema);

module.exports = Comment;
