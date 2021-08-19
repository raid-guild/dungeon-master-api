import { Member as member } from '../models/member';

import { MemberInterface } from '../utils/types';

export const createMember = async (
  record: MemberInterface
): Promise<MemberInterface> => {
  const response = await member.create(record);
  return response;
};

export const updateMemberById = async (
  id: string,
  record: MemberInterface
): Promise<MemberInterface> => {
  await member.updateOne({ _id: id }, { $set: record });
  const updatedMember = await member.findById(id);
  return updatedMember;
};
