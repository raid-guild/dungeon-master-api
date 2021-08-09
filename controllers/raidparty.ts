import { RaidParty as raidparty } from '../models/raidparty';

import { RaidPartyInterface } from '../utils/types';

export const createRaidParty = async (record: RaidPartyInterface) => {
  const response = await raidparty.create(record);
  return response;
};

export const updateRaidPartyById = async (
  id: string,
  record: RaidPartyInterface
) => {
  const response = await raidparty.updateOne({ _id: id }, { $set: record });
  return response;
};
