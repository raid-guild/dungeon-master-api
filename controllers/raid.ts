import { Raid as raid } from '../models/raid';

import { RaidInterface } from '../utils/types';

export const createRaid = async (
  record: RaidInterface
): Promise<RaidInterface> => {
  const response = await raid.create(record);
  return response;
};

export const updateRaidById = async (
  id: string,
  record: RaidInterface
): Promise<RaidInterface> => {
  await raid.updateOne({ _id: id }, { $set: record });
  const updatedRaid = await raid.findById(id);
  return updatedRaid;
};
