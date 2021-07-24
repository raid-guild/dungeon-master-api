const mongoose = require('mongoose');

const RaidPartySchema = new mongoose.Schema({
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Member',
    required: true,
    immutable: false
  },
  raid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Raid',
    required: true,
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
 *      RaidParty:
 *        type: object
 *        required:
 *          - members
 *          - raid
 *          - created_on
 *          - modified_on
 *        properties:
 *          members:
 *            type: array
 *            items:
 *              type: string
 *          raid:
 *            type: string
 *          created_on:
 *            type: string
 *          modifed_on:
 *            type: string
 */

const RaidParty = new mongoose.model('RaidParty', RaidPartySchema);

module.exports = RaidParty;
