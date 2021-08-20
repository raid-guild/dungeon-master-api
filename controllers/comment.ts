import { Comment as comment } from '../models/comment';

import { CommentInterface } from '../utils/types';

export const createComment = async (
  record: CommentInterface
): Promise<CommentInterface> => {
  const response = await comment.create(record);
  return response;
};

export const updateCommentById = async (
  id: string,
  record: CommentInterface
): Promise<CommentInterface> => {
  await comment.updateOne({ _id: id }, { $set: record });
  const updatedComment = await comment.findById(id);
  return updatedComment;
};
