import { Consultation as consultation } from '../models/consultation';

import {
  ConsultationInterface,
  UpdateConsultHashInterface
} from '../utils/types';

export const createConsultation = async (
  record: ConsultationInterface
): Promise<ConsultationInterface> => {
  const response = await consultation.create(record);
  return response;
};

export const updateConsultationBySubmissionHash = async (
  data: UpdateConsultHashInterface
): Promise<ConsultationInterface> => {
  await consultation.updateOne(
    { submission_hash: data.submission_hash },
    { $set: { consultation_hash: data.consultation_hash } }
  );
  const updatedConsultation = await consultation.findOne({
    submission_hash: data.submission_hash
  });
  return updatedConsultation;
};
