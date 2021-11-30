import { Document, Schema, model } from 'mongoose';

import { RaidInterface } from '../utils/types';
import { GUILD_CLASS, RAID_STATUS, RAID_CATEGORY } from '../utils/constants';

interface RaidDocument extends RaidInterface, Document {}

const RaidSchema = new Schema<RaidDocument>(
  {
    raid_name: {
      type: String,
      required: true,
      immutable: false
    },
    status: {
      type: String,
      emum: RAID_STATUS,
      required: true,
      immutable: false
    },
    category: {
      type: String,
      enum: RAID_CATEGORY,
      required: true,
      immutable: false
    },
    cleric: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: true,
      immutable: false
    },
    roles_required: {
      type: [String],
      enum: GUILD_CLASS,
      required: false,
      immutable: false
    },
    raid_party: {
      type: Schema.Types.ObjectId,
      ref: 'RaidParty',
      required: false,
      immutable: false
    },
    invoice_address: {
      type: String,
      required: false,
      immutable: false
    },
    start_date: {
      type: Date,
      required: false,
      immutable: false
    },
    end_date: {
      type: Date,
      required: false,
      immutable: false
    },
    comments: {
      type: [Schema.Types.ObjectId],
      ref: 'Comment',
      required: false,
      immutable: false
    },
    consultation: {
      type: Schema.Types.ObjectId,
      ref: 'Consultation',
      required: false,
      immutable: false
    },
    related_raids: {
      type: [Schema.Types.ObjectId],
      ref: 'Raid',
      required: false,
      immutable: false
    },
    portfolio: {
      type: Schema.Types.ObjectId,
      ref: 'Portfolio',
      required: false,
      immutable: false
    },
    legacy: {
      airtable_id: {
        type: String,
        required: false
      },
      escrow_index: {
        type: Number,
        required: false
      },
      locker_hash: {
        type: String,
        required: false
      }
    }
  },
  { timestamps: true }
);

export const Raid = model<RaidDocument>('Raid', RaidSchema);
