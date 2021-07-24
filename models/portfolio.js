const mongoose = require('mongoose');
const { GUILD_CLASS, RAID_CATEGORY } = require('../utils/constants');

const PortfolioSchema = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
    immutable: false
  },
  project_desc: {
    type: String,
    required: true,
    immutable: false
  },
  category: {
    type: String,
    enum: RAID_CATEGORY,
    required: true,
    immutable: false
  },
  roles: {
    type: [String],
    enum: GUILD_CLASS,
    required: true,
    immutable: false
  },
  case_study: {
    type: String,
    required: true,
    immutable: false
  },
  repo_link: {
    type: String,
    required: true,
    immutable: false
  },
  result_link: {
    type: String,
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
 *      Portfolio:
 *        type: object
 *        required:
 *          - project_name
 *          - project_desc
 *          - category
 *          - roles
 *          - case_study
 *          - repo_link
 *          - result_link
 *          - created_on
 *          - modifed_on
 *        properties:
 *          project_name:
 *            type: string
 *          project_desc:
 *            type: string
 *          category:
 *            type: string
 *          roles:
 *            type: array
 *            items:
 *              type: string
 *          case_study:
 *            type: string
 *          repo_link:
 *            type: string
 *          result_link:
 *            type: string
 *          created_on:
 *            type: string
 *          modified_on:
 *            type: string
 */

const Portfolio = new mongoose.model('Portfolio', PortfolioSchema);

module.exports = Portfolio;
