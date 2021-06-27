const mongoose = require('mongoose');
const {
  SKILLS,
  SKILL_TYPE,
  DAO_FAMILIARITY,
  COHORT_AVAILABILITY
} = require('../utils/constants');

const ApplicationSchema = new mongoose.Schema({
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
  introduction: {
    type: String,
    required: true
  },
  learning_goals: {
    type: String,
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
  skill_type: {
    type: String,
    enum: SKILL_TYPE,
    required: true
  },
  passion: {
    type: String,
    required: true
  },
  favorite_media: {
    type: String,
    required: true
  },
  crypto_thrills: {
    type: String,
    required: true
  },
  why_raidguild: {
    type: String,
    required: true
  },
  dao_familiarity: {
    type: String,
    enum: DAO_FAMILIARITY,
    required: true
  },
  availability: {
    type: String,
    enum: COHORT_AVAILABILITY,
    required: true
  },
  crypto_exp: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: false
  },
  handbook_read: {
    type: Boolean,
    required: true
  },
  pledge_readiness: {
    type: Boolean,
    required: true
  },
  referred_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: false
  },
  submission_date: {
    type: Date,
    default: Date.now(),
    required: true
  }
});

const Application = new mongoose.model('Application', ApplicationSchema);

module.exports = Application;
