const application = require('../models/application');
const consultation = require('../models/consultation');
const member = require('../models/member');
const raid = require('../models/raid');
const portfolio = require('../models/portfolio');
const raidparty = require('../models/raidparty');
const comment = require('../models/comment');

const resolvers = {
  Query: {
    async consultations() {
      const response = await consultation.find().populate('raid');
      return response;
    },
    async applications() {
      const response = await application.find().populate('referred_by');
      return response;
    },
    async members() {
      const response = await member
        .find()
        .populate('championed_by')
        .populate('application');
      return response;
    },
    async raids() {
      const response = await raid
        .find()
        .populate('raid_party')
        .populate('comments')
        .populate('related_raids')
        .populate('portfolio');
      return response;
    },
    async portfolios() {
      const response = await portfolio.find();
      return response;
    },
    async raidparties() {
      const response = await raidparty
        .find()
        .populate('members')
        .populate('raid');
      return response;
    },
    async comments() {
      const response = await comment
        .find()
        .populate('commented_by')
        .populate('commented_raid');
      return response;
    }
  }
};

module.exports = { resolvers };
