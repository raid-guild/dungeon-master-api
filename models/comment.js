const { Schema, model } = require('mongoose');

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true
    },
    commented_by: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: true
    },
    commented_raid: {
      type: Schema.Types.ObjectId,
      ref: 'Raid',
      required: true
    }
  },
  { timestamps: true }
);

const Comment = model('Comment', CommentSchema);

module.exports = { Comment };
