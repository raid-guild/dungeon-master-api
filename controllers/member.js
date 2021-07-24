const member = require('../models/member');

const createMember = async (record) => {
  const response = await member.create(record);
  return response;
};

const updateMemberById = async (id, record) => {
  let data = record;
  data['modified_on'] = Date.now();
  const response = await member.updateOne({ _id: id }, { $set: data });
  return response;
};

module.exports = { createMember, updateMemberById };
