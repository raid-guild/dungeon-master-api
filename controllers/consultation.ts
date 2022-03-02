import { Consultation as consultation } from '../models/consultation';

import { ConsultationInterface } from '../utils/types';

export const createConsultation = async (
  record: ConsultationInterface
): Promise<ConsultationInterface> => {
  const response = await consultation.create(record);
  return response;
};

export const updateConsultationBySubmissionHash = async (
  submissionHash: string,
  record: ConsultationInterface
): Promise<ConsultationInterface> => {
  await consultation.updateOne(
    { submission_hash: submissionHash },
    { $set: record }
  );
  const updatedConsultation = await consultation.findOne({
    submission_hash: submissionHash
  });
  return updatedConsultation;
};
