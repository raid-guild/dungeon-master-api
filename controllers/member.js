const { Member } = require('../models/member');

const createMember = async (record) => {
  const response = await Member.create(record);
  return response;
};

const updateMemberById = async (id, record) => {
  await Member.updateOne({ _id: id }, { $set: record });
  const updatedMember = await Member.findById(id);
  return updatedMember;
};

module.exports = { createMember, updateMemberById };
