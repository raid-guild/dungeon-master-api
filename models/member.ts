import { Document, Schema, model } from 'mongoose';

import { MemberInterface } from '../utils/types';
import { GUILD_CLASS, SKILLS } from '../utils/constants';

interface MemberDocument extends MemberInterface, Document {}

const MemberSchema = new Schema<MemberDocument>(
  {
    legacy_id: {
      type: String,
      required: false,
      immutable: false
    },
    name: {
      type: String,
      required: true,
      immutable: false
    },
    email_address: {
      type: String,
      required: true,
      immutable: false
    },
    discord_handle: {
      type: String,
      required: true,
      immutable: false
    },
    telegram_handle: {
      type: String,
      required: false,
      immutable: false
    },
    twitter_handle: {
      type: String,
      required: false,
      immutable: false
    },
    github_handle: {
      type: String,
      required: false,
      immutable: false
    },
    eth_address: {
      type: String,
      required: true,
      immutable: false
    },
    ens_name: {
      type: String,
      required: false,
      immutable: false
    },
    guild_class: {
      type: String,
      enum: GUILD_CLASS,
      required: true,
      immutable: false
    },
    primary_skills: {
      type: [String],
      enum: SKILLS,
      required: true,
      immutable: false
    },
    secondary_skills: {
      type: [String],
      enum: SKILLS,
      required: true,
      immutable: false
    },
    membership_date: {
      type: Date,
      required: true,
      immutable: false,
      default: Date.now()
    },
    is_raiding: {
      type: Boolean,
      default: false,
      required: true,
      immutable: false
    },
    championed_by: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: false,
      immutable: false
    },
    application: {
      type: Schema.Types.ObjectId,
      ref: 'Application',
      required: false,
      immutable: false
    }
  },
  { timestamps: true }
);

export const Member = model<MemberDocument>('Member', MemberSchema);
