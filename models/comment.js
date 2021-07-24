const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
    immutable: false
  },
  commented_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
    immutable: true
  },
  commented_on: {
    type: Date,
    default: Date.now(),
    required: true,
    immutable: true
  },
  commented_raid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Raid',
    required: true,
    immutable: false
  },
  modified_on: {
    type: Date,
    default: Date.now(),
    required: true,
    immutable: false
  }
});

/**
 * @swagger
 *  components:
 *    schemas:
 *      Comment:
 *        type: object
 *        required:
 *          - comment
 *          - commented_by
 *          - commented_on
 *          - commented_raid
 *          - modified_on
 *        properties:
 *          comment:
 *            type: string
 *          commented_by:
 *            type: string
 *          commented_on:
 *            type: string
 *          commented_raid:
 *            type: string
 *          modified_on:
 *            type: string
 */

const Comment = new mongoose.model('Comment', CommentSchema);

module.exports = Comment;
