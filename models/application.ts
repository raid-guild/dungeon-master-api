import { Document, Schema, model } from 'mongoose';

import { ApplicationInterface } from '../utils/types';
import {
  SKILLS,
  SKILL_TYPE,
  DAO_FAMILIARITY,
  COHORT_AVAILABILITY
} from '../utils/constants';

interface ApplicationDocument extends ApplicationInterface, Document {}

const ApplicationSchema = new Schema<ApplicationDocument>(
  {
    name: {
      type: String,
      required: true,
      immutable: true
    },
    email_address: {
      type: String,
      required: true,
      immutable: true
    },
    discord_handle: {
      type: String,
      required: true,
      immutable: true
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
      immutable: true,
      default: 'NA'
    },
    ens_name: {
      type: String,
      required: false,
      immutable: false
    },
    introduction: {
      type: String,
      required: true,
      immutable: true,
      default: 'NA'
    },
    learning_goals: {
      type: String,
      required: true,
      immutable: true,
      default: 'NA'
    },
    primary_skills: {
      type: [String],
      enum: SKILLS,
      required: true,
      immutable: true
    },
    secondary_skills: {
      type: [String],
      enum: SKILLS,
      required: true,
      immutable: true
    },
    skill_type: {
      type: String,
      enum: SKILL_TYPE,
      required: true,
      immutable: true,
      default: 'NA'
    },
    passion: {
      type: String,
      required: true,
      immutable: true,
      default: 'NA'
    },
    favorite_media: {
      type: String,
      required: true,
      immutable: true,
      default: 'NA'
    },
    crypto_thrills: {
      type: String,
      required: true,
      immutable: true,
      default: 'NA'
    },
    why_raidguild: {
      type: String,
      required: true,
      immutable: true,
      default: 'NA'
    },
    dao_familiarity: {
      type: String,
      enum: DAO_FAMILIARITY,
      required: true,
      immutable: true,
      default: 'NA'
    },
    availability: {
      type: String,
      enum: COHORT_AVAILABILITY,
      required: true,
      immutable: true,
      default: 'NA'
    },
    crypto_exp: {
      type: String,
      required: true,
      immutable: true,
      default: 'NA'
    },
    comments: {
      type: String,
      required: false,
      immutable: false
    },
    handbook_read: {
      type: Boolean,
      required: true,
      immutable: true,
      default: false
    },
    pledge_readiness: {
      type: Boolean,
      required: true,
      immutable: true,
      default: false
    },
    referred_by: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: false,
      immutable: false
    }
  },
  { timestamps: true }
);

export const Application = model<ApplicationInterface>(
  'Application',
  ApplicationSchema
);
