import { Application as application } from '../models/application';

import { ApplicationInterface } from '../utils/types';

export const createApplication = async (record: ApplicationInterface) => {
  const response = await application.create(record);
  return response;
};

export const updateApplicationById = async (
  id: string,
  record: ApplicationInterface
) => {
  const response = await application.updateOne({ _id: id }, { $set: record });
  return response;
};
