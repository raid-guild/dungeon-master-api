import { Document, Schema, model } from 'mongoose';

import { RaidPartyInterface } from '../utils/types';

interface RaidPartyDocument extends RaidPartyInterface, Document {}

const RaidPartySchema = new Schema<RaidPartyDocument>(
  {
    members: {
      type: [Schema.Types.ObjectId],
      ref: 'Member',
      required: true
    },
    raid: {
      type: Schema.Types.ObjectId,
      ref: 'Raid',
      required: true
    }
  },
  { timestamps: true }
);

export const RaidParty = model<RaidPartyDocument>('RaidParty', RaidPartySchema);
