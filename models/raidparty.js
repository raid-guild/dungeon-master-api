const { Schema, model } = require('mongoose');

const RaidPartySchema = new Schema(
  {
    members: {
      type: [Schema.Types.ObjectId],
      ref: 'Member',
      required: true
    },
    raid: {
      type: Schema.Types.ObjectId,
      ref: 'Raid',
      required: true
    }
  },
  { timestamps: true }
);

const RaidParty = model('RaidParty', RaidPartySchema);

module.exports = { RaidParty };
