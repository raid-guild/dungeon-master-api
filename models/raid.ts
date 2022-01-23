import { Document, Schema, model } from 'mongoose';

import { RaidInterface } from '../utils/types';
import { GUILD_CLASS, RAID_STATUS, RAID_CATEGORY } from '../utils/constants';

interface RaidDocument extends RaidInterface, Document {}

const RaidSchema = new Schema<RaidDocument>(
  {
    raid_name: {
      type: String,
      required: true
    },
    status: {
      type: String,
      emum: RAID_STATUS,
      required: true
    },
    category: {
      type: String,
      enum: RAID_CATEGORY,
      required: true
    },
    cleric: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: true
    },
    roles_required: {
      type: [String],
      enum: GUILD_CLASS,
      required: false
    },
    raid_party: {
      type: Schema.Types.ObjectId,
      ref: 'RaidParty',
      required: false
    },
    invoice_address: {
      type: String,
      required: false
    },
    start_date: {
      type: Date,
      required: false
    },
    end_date: {
      type: Date,
      required: false
    },
    comments: {
      type: [Schema.Types.ObjectId],
      ref: 'Comment',
      required: false
    },
    consultation: {
      type: Schema.Types.ObjectId,
      ref: 'Consultation',
      required: false
    },
    related_raids: {
      type: [Schema.Types.ObjectId],
      ref: 'Raid',
      required: false
    },
    portfolio: {
      type: Schema.Types.ObjectId,
      ref: 'Portfolio',
      required: false
    }
  },
  { timestamps: true }
);

export const Raid = model<RaidDocument>('Raid', RaidSchema);
