const consultation = require('../models/consultation');

const createConsultation = async (record) => {
  const response = await consultation.create(record);
  return response;
};

const updateConsultationById = async (id, record) => {
  const response = await consultation.updateOne({ _id: id }, { $set: record });
  return response;
};

module.exports = { createConsultation, updateConsultationById };
