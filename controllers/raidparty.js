const { RaidParty } = require('../models/raidparty');

const createRaidParty = async (record) => {
  const response = await RaidParty.create(record);
  return response;
};

const updateRaidPartyById = async (id, record) => {
  await RaidParty.updateOne({ _id: id }, { $set: record });
  const updatedRaidParty = await RaidParty.findById(id);
  return updatedRaidParty;
};

module.exports = { createRaidParty, updateRaidPartyById };
