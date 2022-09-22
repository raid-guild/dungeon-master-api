const { Schema, model } = require('mongoose');

const TokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true
    },
    eth_address: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Token = model('Token', TokenSchema);

module.exports = { Token };
