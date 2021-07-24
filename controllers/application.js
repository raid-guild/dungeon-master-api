const application = require('../models/application');

const createApplication = async (record) => {
  const response = await application.create(record);
  return response;
};

const updateApplicationById = async (id, record) => {
  const response = await application.updateOne({ _id: id }, { $set: record });
  return response;
};

module.exports = { createApplication, updateApplicationById };
