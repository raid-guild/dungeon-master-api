import { Document, Schema, model } from 'mongoose';

import { ConsultationInterface } from '../utils/types';
import {
  PREFERRED_CONTACT,
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
    project_name: {
      type: String,
      required: true,
      immutable: true
    },
    contact_name: {
      type: String,
      required: true,
      immutable: true
    },
    contact_email: {
      type: String,
      required: true,
      immutable: true
    },
    contact_bio: {
      type: String,
      required: true,
      immutable: true
    },
    contact_discord: {
      type: String,
      required: false,
      immutable: false
    },
    contact_telegram: {
      type: String,
      required: false,
      immutable: false
    },
    preferred_contact: {
      type: String,
      enum: PREFERRED_CONTACT,
      required: true,
      immutable: true
    },
    project_type: {
      type: String,
      enum: PROJECT_TYPE,
      required: true,
      immutable: true
    },
    project_specs: {
      type: String,
      enum: AVAILABLE_PROJECT_SPECS,
      required: true,
      immutable: true
    },
    specs_link: {
      type: String,
      required: false,
      immutable: false
    },
    project_desc: {
      type: String,
      required: true,
      immutable: true
    },
    services_req: {
      type: [String],
      enum: SERVICES,
      required: true,
      immutable: true
    },
    desired_delivery: {
      type: Date,
      required: false,
      immutable: false
    },
    budget: {
      type: String,
      enum: BUDGET,
      required: true,
      immutable: true
    },
    delivery_priorities: {
      type: String,
      enum: DELIVERY_PRIORITIES,
      required: true,
      immutable: true
    },
    additional_info: {
      type: String,
      required: true,
      immutable: true
    },
    submission_type: {
      type: String,
      enum: SUBMISSION_TYPE,
      required: true,
      immutable: false
    },
    consultation_hash: {
      type: String,
      required: false,
      immutable: false
    },
    feedback: {
      type: String,
      required: false,
      immutable: false
    },
    rating: {
      type: Number,
      required: false,
      immutable: false
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
