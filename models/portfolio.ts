import { Document, Schema, model } from 'mongoose';

import { PortfolioInterface } from '../utils/types';
import { GUILD_CLASS, RAID_CATEGORY } from '../utils/constants';

interface PortfolioDocument extends PortfolioInterface, Document {}

const PortfolioSchema = new Schema<PortfolioDocument>(
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

export const Portfolio = model<PortfolioDocument>('Portfolio', PortfolioSchema);
