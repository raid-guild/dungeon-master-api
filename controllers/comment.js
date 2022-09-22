const { Comment } = require('../models/comment');

const createComment = async (record) => {
  const response = await Comment.create(record);
  return response;
};

module.exports = { createComment };
