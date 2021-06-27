const mongoose = require('mongoose');
const { GUILD_CLASS, SKILLS } = require('../utils/constants');

const MemberSchema = new mongoose.Schema({
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
    required: true
  },
  is_raiding: {
    type: Boolean,
    default: false,
    required: true
  },
  championed_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: false
  },
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
    required: false
  }
});

const Member = new mongoose.model('Member', MemberSchema);

module.exports = Member;
