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
  },
  Mutation: {
    async updateRaid(parent, args) {
      await raid.updateOne(
        { _id: args['_id'] },
        {
          $set: args
        }
      );
      const updatedRaid = await raid.findById(args['_id']);
      return updatedRaid;
    },
    async updateConsultation(parent, args) {
      await consultation.updateOne(
        { _id: args['_id'] },
        {
          $set: { raid: args['raid_id'] }
        }
      );
      const updatedConsultation = await consultation.findById(args['_id']);
      return updatedConsultation;
    },
    async updateApplication(parent, args) {
      await application.updateOne(
        { _id: args['_id'] },
        { referred_by: args['referrer_id'] }
      );
      const updatedApplication = await application.findById(args['_id']);
      return updatedApplication;
    },
    async updateMember(parent, args) {
      await member.updateOne(
        { _id: args['_id'] },
        {
          $set: args
        }
      );
      const updatedMember = await member.findById(args['_id']);
      return updatedMember;
    },
    async updatePortfolio(parent, args) {
      await member.updateOne(
        { _id: args['_id'] },
        {
          $set: args
        }
      );
      const updatedPortfolio = await portfolio.findById(args['_id']);
      return updatedPortfolio;
    }
  }
};

module.exports = { resolvers };
