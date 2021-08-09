import { Document, Schema, model } from 'mongoose';

import { CommentInterface } from '../utils/types';

interface CommentDocument extends CommentInterface, Document {}

const CommentSchema = new Schema<CommentDocument>(
  {
    comment: {
      type: String,
      required: true,
      immutable: false
    },
    commented_by: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: true,
      immutable: true
    },
    commented_raid: {
      type: Schema.Types.ObjectId,
      ref: 'Raid',
      required: true,
      immutable: false
    }
  },
  { timestamps: true }
);

/**
 * @swagger
 *  components:
 *    schemas:
 *      Comment:
 *        type: object
 *        required:
 *          - comment
 *          - commented_by
 *          - commented_raid
 *        properties:
 *          comment:
 *            type: string
 *          commented_by:
 *            type: string
 *          commented_raid:
 *            type: string
 */

export const Comment = model<CommentDocument>('Comment', CommentSchema);
