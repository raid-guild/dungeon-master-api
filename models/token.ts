import { Document, Schema, model } from 'mongoose';

import { TokenInterface } from '../utils/types';

interface TokenDocument extends TokenInterface, Document {}

const TokenSchema = new Schema<TokenDocument>(
  {
    token: {
      type: String,
      required: true
    },
    eth_address: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export const Token = model<TokenDocument>('Token', TokenSchema);
