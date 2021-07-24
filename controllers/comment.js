const comment = require('../models/comment');

const createComment = async () => {
  const response = await comment.create(record);
  return response;
};

const updateCommentById = async (id, record) => {
  let data = record;
  data[modified_on] = Date.now();
  const response = await comment.updateOne({ _id: id }, { $set: data });
  return response;
};

module.exports = { createComment, updateCommentById };
