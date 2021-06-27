const mongoose = require('mongoose');

const RaidPartySchema = new mongoose.Schema({
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Member',
    required: true
  },
  raid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Raid',
    required: true
  }
});

const RaidParty = new mongoose.model('RaidParty', RaidPartySchema);

module.exports = RaidParty;
