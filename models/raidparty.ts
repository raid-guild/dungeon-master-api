import { Document, Schema, model } from 'mongoose';

import { RaidPartyInterface } from '../utils/types';

interface RaidPartyDocument extends RaidPartyInterface, Document {}

const RaidPartySchema = new Schema<RaidPartyDocument>(
  {
    members: {
      type: [Schema.Types.ObjectId],
      ref: 'Member',
      required: true,
      immutable: false
    },
    raid: {
      type: Schema.Types.ObjectId,
      ref: 'Raid',
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
 *      RaidParty:
 *        type: object
 *        required:
 *          - members
 *          - raid
 *          - created_on
 *          - modified_on
 *        properties:
 *          members:
 *            type: array
 *            items:
 *              type: string
 *          raid:
 *            type: string
 */

export const RaidParty = model<RaidPartyDocument>('RaidParty', RaidPartySchema);
