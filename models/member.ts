import { Document, Schema, model } from 'mongoose';

import { MemberInterface } from '../utils/types';
import { GUILD_CLASS, SKILLS } from '../utils/constants';

interface MemberDocument extends MemberInterface, Document {}

const MemberSchema = new Schema<MemberDocument>(
  {
    legacy_id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    email_address: {
      type: String,
      required: true
    },
    discord_handle: {
      type: String,
      required: true
    },
    telegram_handle: {
      type: String,
      required: false
    },
    twitter_handle: {
      type: String,
      required: false
    },
    github_handle: {
      type: String,
      required: false
    },
    eth_address: {
      type: String,
      required: true
    },
    ens_name: {
      type: String,
      required: false
    },
    guild_class: {
      type: String,
      enum: GUILD_CLASS,
      required: true
    },
    primary_skills: {
      type: [String],
      enum: SKILLS,
      required: true
    },
    secondary_skills: {
      type: [String],
      enum: SKILLS,
      required: true
    },
    membership_date: {
      type: Date,
      required: false
    },
    is_raiding: {
      type: Boolean,
      default: false,
      required: true
    },
    championed_by: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: false
    },
    application: {
      type: Schema.Types.ObjectId,
      ref: 'Application',
      required: false
    }
  },
  { timestamps: true }
);

export const Member = model<MemberDocument>('Member', MemberSchema);
