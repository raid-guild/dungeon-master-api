/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Application as application } from '../models/application';
import { Consultation as consultation } from '../models/consultation';
import { Member as member } from '../models/member';
import { Raid as raid } from '../models/raid';
import { Portfolio as portfolio } from '../models/portfolio';
import { RaidParty as raidparty } from '../models/raidparty';
import { Comment as comment } from '../models/comment';

import {
  ConsultationInterface,
  ApplicationInterface,
  MemberInterface,
  RaidInterface,
  PortfolioInterface,
  RaidPartyInterface,
  CommentInterface
} from '../utils/types';

export const resolvers = {
  Query: {
    async consultations(): Promise<ConsultationInterface[]> {
      const response = await consultation.find();
      return response;
    },
    async applications(): Promise<ApplicationInterface[]> {
      const response = await application.find().populate('referred_by');
      return response;
    },
    async members(): Promise<MemberInterface[]> {
      const response = await member
        .find()
        .populate('championed_by')
        .populate('application');
      return response;
    },
    async raids(): Promise<RaidInterface[]> {
      const response = await raid
        .find()
        .populate('cleric')
        .populate('consultation')
        .populate('raid_party')
        .populate('comments')
        .populate('related_raids')
        .populate('portfolio');
      return response;
    },
    async portfolios(): Promise<PortfolioInterface[]> {
      const response = await portfolio.find();
      return response;
    },
    async raidparties(): Promise<RaidPartyInterface[]> {
      const response = await raidparty
        .find()
        .populate('members')
        .populate('raid');
      return response;
    },
    async comments(): Promise<CommentInterface[]> {
      const response = await comment
        .find()
        .populate('commented_by')
        .populate('commented_raid');
      return response;
    },

    // individual record resolvers
    async raid(parent: any, { _id }: any): Promise<RaidInterface> {
      const response = await raid
        .findById(_id)
        .populate('cleric')
        .populate('raid_party')
        .populate('comments')
        .populate('consultation')
        .populate('related_raids')
        .populate('portfolio');
      return response;
    },
    async member(parent: any, { filters }: any): Promise<MemberInterface> {
      const shouldApplyIdFilter = !!filters._id;
      const shouldApplyEthFilter = !!filters.eth_address;
      const shouldApplyLegacyFilter = !!filters.legacy_id;

      let response;

      if (shouldApplyIdFilter) {
        response = await member
          .findById(filters._id)
          .populate('championed_by')
          .populate('application');
      } else if (shouldApplyEthFilter) {
        response = await member
          .findOne({
            eth_address: filters.eth_address
          })
          .populate('championed_by')
          .populate('application');
      } else if (shouldApplyLegacyFilter) {
        response = await member
          .findOne({
            legacy_id: filters.legacy_id
          })
          .populate('championed_by')
          .populate('application');
      }

      return response;
    },
    async consultation(
      parent: any,
      { _id }: any
    ): Promise<ConsultationInterface> {
      const response = await consultation.findById(_id).populate('raid');
      return response;
    },
    async application(
      parent: any,
      { _id }: any
    ): Promise<ApplicationInterface> {
      const response = await application.findById(_id).populate('referred_by');
      return response;
    },
    async portfolio(parent: any, { _id }: any): Promise<PortfolioInterface> {
      const response = await portfolio.findById(_id);
      return response;
    },
    async raidparty(parent: any, { _id }: any): Promise<RaidPartyInterface> {
      const response = await raidparty
        .findById(_id)
        .populate('members')
        .populate('raid');
      return response;
    },
    async comment(parent: any, { _id }: any): Promise<CommentInterface> {
      const response = await comment
        .findById(_id)
        .populate('commented_by')
        .populate('commented_raid');
      return response;
    }
  },
  Raid: {
    raid_party: async (_raid) => {
      const party = await raidparty.findOne({ raid: _raid._id });
      return party;
    },
    comments: async (_raid) => {
      const comments = await comment.find({ commented_raid: _raid._id });
      return comments;
    }
  },
  RaidParty: {
    members: async (_raidparty) => {
      const members = [];
      for await (const _memberId of _raidparty.members) {
        const _member = await member.findOne({ _id: _memberId });
        members.push(_member);
      }
      return members;
    }
  },
  Comment: {
    commented_by: async (_comment) => {
      const _member = await member.findOne({ _id: _comment.commented_by });
      return _member;
    }
  }
};
