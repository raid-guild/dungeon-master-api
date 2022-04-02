const { Application } = require('../models/application');
const { Consultation } = require('../models/consultation');
const { Member } = require('../models/member');
const { Raid } = require('../models/raid');
const { Portfolio } = require('../models/portfolio');
const { RaidParty } = require('../models/raidparty');
const { Comment } = require('../models/comment');

const resolvers = {
  Query: {
    async consultations() {
      const response = await Consultation.find().populate('raid');
      return response;
    },
    async applications() {
      const response = await Application.find().populate('referred_by');
      return response;
    },
    async members() {
      const response = await Member.find()
        .populate('championed_by')
        .populate('application');
      return response;
    },
    async raids() {
      const response = await Raid.find()
        .populate('cleric')
        .populate('consultation')
        .populate('raid_party')
        .populate('comments')
        .populate('related_raids')
        .populate('portfolio');
      return response;
    },
    async portfolios() {
      const response = await Portfolio.find();
      return response;
    },
    async raidparties() {
      const response = await RaidParty.find()
        .populate('members')
        .populate('raid');
      return response;
    },
    async comments() {
      const response = await Comment.find()
        .populate('commented_by')
        .populate('commented_raid');
      return response;
    },

    // individual record resolvers
    async raid(parent, { _id }) {
      const response = await Raid.findById(_id)
        .populate('cleric')
        .populate('raid_party')
        .populate('comments')
        .populate('consultation')
        .populate('related_raids')
        .populate('portfolio');
      return response;
    },
    async member(parent, { filters }) {
      const shouldApplyIdFilter = !!filters._id;
      const shouldApplyEthFilter = !!filters.eth_address;
      const shouldApplyLegacyFilter = !!filters.legacy_id;

      let response;

      if (shouldApplyIdFilter) {
        response = await Member.findById(filters._id)
          .populate('championed_by')
          .populate('application');
      } else if (shouldApplyEthFilter) {
        response = await Member.findOne({
          eth_address: { $regex: filters.eth_address, $options: 'i' }
        })
          .populate('championed_by')
          .populate('application');
      } else if (shouldApplyLegacyFilter) {
        response = await Member.findOne({
          legacy_id: filters.legacy_id
        })
          .populate('championed_by')
          .populate('application');
      }
      return response;
    },
    async consultation(parent, { _id }) {
      const response = await Consultation.findById(_id).populate('raid');
      return response;
    },
    async application(parent, { _id }) {
      const response = await Application.findById(_id).populate('referred_by');
      return response;
    },
    async portfolio(parent, { _id }) {
      const response = await Portfolio.findById(_id);
      return response;
    },
    async raidparty(parent, { _id }) {
      const response = await RaidParty.findById(_id)
        .populate('members')
        .populate('raid');
      return response;
    },
    async comment(parent, { _id }) {
      const response = await Comment.findById(_id)
        .populate('commented_by')
        .populate('commented_raid');
      return response;
    }
  },

  // Custom resolvers
  Consultation: {
    raid: async (_consultation) => {
      const _raid = await Raid.findOne({
        consultation: _consultation._id
      });
      return _raid;
    }
  },
  Raid: {
    raid_party: async (_raid) => {
      const _party = await RaidParty.findOne({ raid: _raid._id });
      return _party;
    },
    comments: async (_raid) => {
      const _comments = await Comment.find({ commented_raid: _raid._id });
      return _comments;
    }
  },
  RaidParty: {
    members: async (_raidparty) => {
      const _members = [];
      for await (const _memberId of _raidparty.members) {
        const _member = await Member.findOne({ _id: _memberId });
        _members.push(_member);
      }
      return _members;
    }
  },
  Comment: {
    commented_by: async (_comment) => {
      const _member = await Member.findOne({ _id: _comment.commented_by });
      return _member;
    }
  }
};

module.exports = { resolvers };
