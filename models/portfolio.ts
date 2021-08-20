import { Document, Schema, model } from 'mongoose';

import { PortfolioInterface } from '../utils/types';
import { GUILD_CLASS, RAID_CATEGORY } from '../utils/constants';

interface PortfolioDocument extends PortfolioInterface, Document {}

const PortfolioSchema = new Schema<PortfolioDocument>(
  {
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
    }
  },
  { timestamps: true }
);

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
 */

export const Portfolio = model<PortfolioDocument>('Portfolio', PortfolioSchema);
