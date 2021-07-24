const mongoose = require('mongoose');
const {
  GUILD_CLASS,
  RAID_STATUS,
  RAID_CATEGORY
} = require('../utils/constants');

const RaidSchema = new mongoose.Schema({
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
  cleric_name: {
    type: String,
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
    type: mongoose.Schema.Types.ObjectId,
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
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment',
    required: false,
    immutable: false
  },
  related_raids: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Raid',
    required: false,
    immutable: false
  },
  portfolio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Portfolio',
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
 *      Raid:
 *        type: object
 *        required:
 *          - raid_name
 *          - status
 *          - category
 *          - cleric_name
 *          - created_on
 *          - modified_on
 *        properties:
 *          raid_name:
 *            type: string
 *          status:
 *            type: string
 *          category:
 *            type: string
 *          cleric_name:
 *            type: string
 *          roles_required:
 *            type: array
 *            items:
 *              type: string
 *          raid_party:
 *            type: string
 *          invoice_address:
 *            type: string
 *          start_date:
 *            type: string
 *          end_date:
 *            type: string
 *          comments:
 *            type: array
 *            items:
 *              type: string
 *          related_raids:
 *            type: array
 *            items:
 *              type: string
 *          portfolio:
 *            type: string
 *          created_on:
 *            type: string
 *          modified_on:
 *            type: string
 */

const Raid = mongoose.model('Raid', RaidSchema);

module.exports = Raid;
