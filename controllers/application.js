const { Application } = require('../models/application');

const createApplication = async (record) => {
  const response = await Application.create(record);
  return response;
};

const updateApplicationById = async (id, record) => {
  await Application.updateOne({ _id: id }, { $set: record });
  const updatedApplication = await Application.findById(id);
  return updatedApplication;
};

module.exports = { createApplication, updateApplicationById };
