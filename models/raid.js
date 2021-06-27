const mongoose = require('mongoose');
const {
  GUILD_CLASS,
  RAID_STATUS,
  RAID_CATEGORY
} = require('../utils/constants');

const RaidSchema = new mongoose.Schema({
  raid_name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    emum: RAID_STATUS,
    required: true
  },
  category: {
    type: String,
    enum: RAID_CATEGORY,
    required: true
  },
  cleric_name: { type: String, required: true },
  roles_required: {
    type: [String],
    enum: GUILD_CLASS,
    required: true
  },
  raid_party: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'RaidParty',
    required: true
  },
  invoice_address: { type: String, required: false },
  start_date: { type: Date, required: false },
  end_date: { type: Date, required: false },
  comments: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Comment',
    required: false
  },
  related_raids: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Raid',
    required: false
  },
  portfolio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Portfolio',
    required: false
  }
});

const Raid = mongoose.model('Raid', RaidSchema);

module.exports = Raid;
