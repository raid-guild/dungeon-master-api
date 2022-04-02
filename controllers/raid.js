const { Raid } = require('../models/raid');

const createRaid = async (record) => {
  const response = await Raid.create(record);
  return response;
};

const updateRaidById = async (id, record) => {
  await Raid.updateOne({ _id: id }, { $set: record });
  const updatedRaid = await Raid.findById(id);
  return updatedRaid;
};

module.exports = { createRaid, updateRaidById };
