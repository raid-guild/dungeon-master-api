const { Consultation } = require('../models/consultation');

const createConsultation = async (record) => {
  const response = await Consultation.create(record);
  return response;
};

const updateConsultationById = async (id, data) => {
  await Consultation.updateOne(
    { _id: id },
    { $set: { consultation_hash: data.consultation_hash } }
  );
  const updatedConsultation = await Consultation.findOne({
    submission_hash: data.submission_hash
  });
  return updatedConsultation;
};

const updateConsultationBySubmissionHash = async (data) => {
  await Consultation.updateOne(
    { submission_hash: data.submission_hash },
    { $set: { consultation_hash: data.consultation_hash } }
  );
  const updatedConsultation = await Consultation.findOne({
    submission_hash: data.submission_hash
  });
  return updatedConsultation;
};

module.exports = { createConsultation, updateConsultationById, updateConsultationBySubmissionHash };
