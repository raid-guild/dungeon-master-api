import { Document, Schema, model } from 'mongoose';

import { MemberInterface } from '../utils/types';
import { GUILD_CLASS, SKILLS } from '../utils/constants';

interface MemberDocument extends MemberInterface, Document {}

const MemberSchema = new Schema<MemberDocument>(
  {
    legacy_id: {
      type: String,
      required: true,
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
      immutable: false
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

/**
 * @swagger
 *  components:
 *    schemas:
 *      Member:
 *        type: object
 *        required:
 *          - legacy_id
 *          - name
 *          - email_address
 *          - discord_handle
 *          - eth_address
 *          - guild_class
 *          - primary_skills
 *          - secondary_skills
 *          - membership_date
 *          - is_raiding
 *        properties:
 *          legacy_id:
 *            type: string
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
 *          guild_class:
 *            type: string
 *          primary_skills:
 *            type: array
 *            items:
 *              type: string
 *          secondary_skills:
 *            type: array
 *            items:
 *              type: string
 *          membership_date:
 *            type: string
 *          is_raiding:
 *            type: boolean
 *          championed_by:
 *            type: string
 *          application:
 *            type: string
 */

export const Member = model<MemberDocument>('Member', MemberSchema);
