import { Document, Schema, model } from 'mongoose';

import { ConsultationInterface } from '../utils/types';
import {
  PROJECT_TYPE,
  AVAILABLE_PROJECT_SPECS,
  SERVICES,
  BUDGET,
  DELIVERY_PRIORITIES,
  SUBMISSION_TYPE
} from '../utils/constants';

interface ConsultationDocument extends ConsultationInterface, Document {}

const ConsultationSchema = new Schema<ConsultationDocument>(
  {
    contact_name: {
      type: String,
      required: true
    },
    contact_email: {
      type: String,
      required: true
    },
    contact_bio: {
      type: String,
      required: true
    },
    contact_discord: {
      type: String,
      required: true
    },
    contact_telegram: {
      type: String,
      required: false
    },
    contact_twitter: {
      type: String,
      required: false
    },
    contact_github: {
      type: String,
      required: false
    },
    preferred_contact: {
      type: String,
      required: false
    },
    project_name: {
      type: String,
      required: true
    },
    project_link: {
      type: String,
      required: false
    },
    project_type: {
      type: String,
      enum: PROJECT_TYPE,
      required: true
    },
    project_specs: {
      type: String,
      enum: AVAILABLE_PROJECT_SPECS,
      required: true
    },
    project_desc: {
      type: String,
      required: true
    },
    services_req: {
      type: [String],
      enum: SERVICES,
      required: true
    },
    desired_delivery: {
      type: Date,
      required: false
    },
    budget: {
      type: String,
      enum: BUDGET,
      required: true
    },
    delivery_priorities: {
      type: String,
      enum: DELIVERY_PRIORITIES,
      required: true
    },
    additional_info: {
      type: String,
      required: true
    },
    submission_type: {
      type: String,
      enum: SUBMISSION_TYPE,
      required: true
    },
    submission_hash: {
      type: String,
      required: false
    },
    consultation_hash: {
      type: String,
      required: false
    },
    raid: {
      type: Schema.Types.ObjectId,
      ref: 'Raid',
      required: false
    }
  },
  { timestamps: true }
);

export const Consultation = model<ConsultationDocument>(
  'Consultation',
  ConsultationSchema
);
