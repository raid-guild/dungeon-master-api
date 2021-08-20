import { Application as application } from '../models/application';

import { ApplicationInterface } from '../utils/types';

export const createApplication = async (
  record: ApplicationInterface
): Promise<ApplicationInterface> => {
  const response = await application.create(record);
  return response;
};

export const updateApplicationById = async (
  id: string,
  record: ApplicationInterface
): Promise<ApplicationInterface> => {
  await application.updateOne({ _id: id }, { $set: record });
  const updatedApplication = await application.findById(id);
  return updatedApplication;
};
