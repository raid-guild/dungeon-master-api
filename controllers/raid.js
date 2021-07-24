const raid = require('../models/raid');

const createRaid = async (record) => {
  const response = await raid.create(record);
  return response;
};

const updateRaidById = async (id, record) => {
  let data = record;
  data['modified_on'] = Date.now();
  const response = await raid.updateOne({ _id: id }, { $set: data });
  return response;
};

module.exports = { createRaid, updateRaidById };
