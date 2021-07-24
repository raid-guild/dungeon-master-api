const raidparty = require('../models/raidparty');

const createRaidParty = async (record) => {
  const response = await raidparty.create(record);
  return response;
};

const updateRaidPartyById = async (id, record) => {
  let data = record;
  data['modified_on'] = Date.now();
  const response = await raidparty.updateOne({ _id: id }, { $set: data });
  return response;
};

module.exports = { createRaidParty, updateRaidPartyById };
