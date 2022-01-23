import { Comment as comment } from '../models/comment';

import { CommentInterface } from '../utils/types';

export const createComment = async (
  record: CommentInterface
): Promise<CommentInterface> => {
  const response = await comment.create(record);
  return response;
};
