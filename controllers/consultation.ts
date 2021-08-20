import { Consultation as consultation } from '../models/consultation';

import { ConsultationInterface } from '../utils/types';

export const createConsultation = async (
  record: ConsultationInterface
): Promise<ConsultationInterface> => {
  const response = await consultation.create(record);
  return response;
};

export const updateConsultationById = async (
  id: string,
  record: ConsultationInterface
): Promise<ConsultationInterface> => {
  await consultation.updateOne({ _id: id }, { $set: record });
  const updatedConsultation = await consultation.findById(id);
  return updatedConsultation;
};
