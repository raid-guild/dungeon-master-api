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
      immutable: true
    },
    ens_name: {
      type: String,
      required: false,
      immutable: false
    },
    introduction: {
      type: String,
      required: true,
      immutable: true
    },
    learning_goals: {
      type: String,
      required: true,
      immutable: true
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
      immutable: true
    },
    passion: {
      type: String,
      required: true,
      immutable: true
    },
    favorite_media: {
      type: String,
      required: true,
      immutable: true
    },
    crypto_thrills: {
      type: String,
      required: true,
      immutable: true
    },
    why_raidguild: {
      type: String,
      required: true,
      immutable: true
    },
    dao_familiarity: {
      type: String,
      enum: DAO_FAMILIARITY,
      required: true,
      immutable: true
    },
    availability: {
      type: String,
      enum: COHORT_AVAILABILITY,
      required: true,
      immutable: true
    },
    crypto_exp: {
      type: String,
      required: true,
      immutable: true
    },
    comments: {
      type: String,
      required: false,
      immutable: false
    },
    handbook_read: {
      type: Boolean,
      required: true,
      immutable: true
    },
    pledge_readiness: {
      type: Boolean,
      required: true,
      immutable: true
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

/**
 * @swagger
 *  components:
 *    schemas:
 *      Application:
 *        type: object
 *        required:
 *          - name
 *          - email_address
 *          - discord_handle
 *          - eth_address
 *          - introduction
 *          - learning_goals
 *          - primary_skills
 *          - secondary_skills
 *          - skill_type
 *          - passion
 *          - favorite_media
 *          - crypto_thrills
 *          - why_raidguild
 *          - dao_familiarity
 *          - availability
 *          - crypto_exp
 *          - handbook_read
 *          - pledge_readiness
 *        properties:
 *          name:
 *            type: string
 *          email_address:
 *            type: string
 *          discord_handle:
 *            type: string
 *          telegram_handle:
 *            type: string
 *          twitter_handle:
 *            type: string
 *          github_handle:
 *            type: string
 *          eth_address:
 *            type: string
 *          ens_name:
 *            type: string
 *          introduction:
 *            type: string
 *          learning_goals:
 *            type: string
 *          primary_skills:
 *            type: array
 *            items:
 *              type: string
 *          secondary_skills:
 *            type: array
 *            items:
 *              type: string
 *          skill_type:
 *            type: string
 *          passion:
 *            type: string
 *          favorite_media:
 *            type: string
 *          crypto_thrills:
 *            type: string
 *          why_raidguild:
 *            type: string
 *          dao_familiarity:
 *            type: string
 *          availability:
 *            type: string
 *          crypto_exp:
 *            type: string
 *          comments:
 *            type: string
 *          handbook_read:
 *            type: boolean
 *          pledge_readiness:
 *            type: boolean
 *          referred_by:
 *            type: string
 */

export const Application = model<ApplicationInterface>(
  'Application',
  ApplicationSchema
);
