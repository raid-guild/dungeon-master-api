const { Schema, model } = require('mongoose');

const { GUILD_CLASS, RAID_CATEGORY } = require('../utils/constants');

const PortfolioSchema = new Schema(
  {
    project_name: {
      type: String,
      required: true
    },
    project_desc: {
      type: String,
      required: true
    },
    category: {
      type: String,
      enum: RAID_CATEGORY,
      required: true
    },
    roles: {
      type: [String],
      enum: GUILD_CLASS,
      required: true
    },
    case_study: {
      type: String,
      required: true
    },
    repo_link: {
      type: String,
      required: true
    },
    result_link: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Portfolio = model('Portfolio', PortfolioSchema);

module.exports = { Portfolio };
