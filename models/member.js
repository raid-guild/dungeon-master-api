const mongoose = require('mongoose');
const { GUILD_CLASS, SKILLS } = require('../utils/constants');

const MemberSchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',
    required: false,
    immutable: false
  },
  application: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application',
    required: false,
    immutable: false
  },
  created_on: {
    type: Date,
    default: Date.now(),
    required: true,
    immutable: true
  },
  modified_on: {
    type: Date,
    default: Date.now(),
    required: true,
    immutable: false
  }
});

/**
 * @swagger
 *  components:
 *    schemas:
 *      Member:
 *        type: object
 *        required:
 *          - name
 *          - email_address
 *          - discord_handle
 *          - eth_address
 *          - guild_class
 *          - primary_skills
 *          - secondary_skills
 *          - membership_date
 *          - is_raiding
 *          - created_on
 *          - modified_on
 *        properties:
 *          name:
 *            type: string
 *          email_address:
 *            type: string
 *          discord_handle:
 *            type: string
 *          telegram_handle:
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
 *          created_on:
 *            type: string
 *          modified_on:
 *            type: string
 */

const Member = new mongoose.model('Member', MemberSchema);

module.exports = Member;
