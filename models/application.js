const { Schema, model } = require('mongoose');

const {
  SKILLS,
  SKILL_TYPE,
  DAO_FAMILIARITY,
  COHORT_AVAILABILITY
} = require('../utils/constants');

const ApplicationSchema = new Schema(
  {
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
      required: true,
      default: 'NA'
    },
    ens_name: {
      type: String,
      required: false
    },
    introduction: {
      type: String,
      required: true,
      default: 'NA'
    },
    learning_goals: {
      type: String,
      required: true,
      default: 'NA'
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
    skill_type: {
      type: String,
      enum: SKILL_TYPE,
      required: true,
      default: 'NA'
    },
    passion: {
      type: String,
      required: true,
      default: 'NA'
    },
    favorite_media: {
      type: String,
      required: true,
      default: 'NA'
    },
    crypto_thrills: {
      type: String,
      required: true,
      default: 'NA'
    },
    why_raidguild: {
      type: String,
      required: true,
      default: 'NA'
    },
    dao_familiarity: {
      type: String,
      enum: DAO_FAMILIARITY,
      required: true,
      default: 'NA'
    },
    availability: {
      type: String,
      enum: COHORT_AVAILABILITY,
      required: true,
      default: 'NA'
    },
    crypto_exp: {
      type: String,
      required: true,
      default: 'NA'
    },
    comments: {
      type: String,
      required: false
    },
    handbook_read: {
      type: Boolean,
      required: true,
      default: false
    },
    pledge_readiness: {
      type: Boolean,
      required: true,
      default: false
    },
    referred_by: {
      type: Schema.Types.ObjectId,
      ref: 'Member',
      required: false
    }
  },
  { timestamps: true }
);

const Application = model('Application', ApplicationSchema);

module.exports = { Application };
