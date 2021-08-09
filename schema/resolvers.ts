import { Application as application } from '../models/application';
import { Consultation as consultation } from '../models/consultation';
import { Member as member } from '../models/member';
import { Raid as raid } from '../models/raid';
import { Portfolio as portfolio } from '../models/portfolio';
import { RaidParty as raidparty } from '../models/raidparty';
import { Comment as comment } from '../models/comment';

export const resolvers = {
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
    },

    // individual record resolvers
    async raid(parent: any, { _id }: any) {
      const response = await raid
        .findById(_id)
        .populate('raid_party')
        .populate('comments')
        .populate('related_raids')
        .populate('portfolio');
      return response;
    },
    async member(parent: any, { filters }: any) {
      const shouldApplyIdFilter = filters._id ? true : false;

      const response = shouldApplyIdFilter
        ? await member
            .findById(filters._id)
            .populate('championed_by')
            .populate('application')
        : await member
            .findOne({
              eth_address: filters.eth_address
            })
            .populate('championed_by')
            .populate('application');

      return response;
    },
    async consultation(parent: any, { _id }: any) {
      const response = await consultation.findById(_id).populate('raid');
      return response;
    },
    async application(parent: any, { _id }: any) {
      const response = await application.findById(_id).populate('referred_by');
      return response;
    },
    async portfolio(parent: any, { _id }: any) {
      const response = await portfolio.findById(_id);
      return response;
    },
    async raidparty(parent: any, { _id }: any) {
      const response = await raidparty
        .findById(_id)
        .populate('members')
        .populate('raid');
      return response;
    },
    async comment(parent: any, { _id }: any) {
      const response = await comment
        .findById(_id)
        .populate('commented_by')
        .populate('commented_raid');
      return response;
    }
  }
};
