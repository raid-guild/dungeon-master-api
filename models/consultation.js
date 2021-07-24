const mongoose = require('mongoose');

const {
  PREFERRED_CONTACT,
  PROJECT_TYPE,
  AVAILABLE_PROJECT_SPECS,
  SERVICES,
  BUDGET,
  DELIVERY_PRIORITIES,
  SUBMISSION_TYPE
} = require('../utils/constants');

const ConsultationSchema = new mongoose.Schema({
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
  submission_date: {
    type: Date,
    default: Date.now(),
    required: true,
    immutable: true
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Raid',
    required: false,
    immutable: false
  }
});

/**
 * @swagger
 *  components:
 *    schemas:
 *      Consultation:
 *        type: object
 *        required:
 *          - project_name
 *          - contact_name
 *          - contact_email
 *          - contact_bio
 *          - preferred_contact
 *          - project_type
 *          - project_specs
 *          - project_desc
 *          - services_req
 *          - budget
 *          - delivery_priorities
 *          - additional_info
 *          - submission_type
 *          - submission_date
 *        properties:
 *          project_name:
 *            type: string
 *          contact_name:
 *            type: string
 *          contact_email:
 *            type: string
 *          contact_bio:
 *            type: string
 *          contact_discord:
 *            type: string
 *          contact_telegram:
 *            type: string
 *          preferred_contact:
 *            type: string
 *          project_type:
 *            type: string
 *          specs_link:
 *            type: string
 *          project_desc:
 *            type: string
 *          services_req:
 *            type: array
 *            items:
 *              type: string
 *          desired_delivery:
 *            type: string
 *          budget:
 *            type: string
 *          delivery_priorities:
 *            type: string
 *          additional_info:
 *            type: string
 *          submission_type:
 *            type: string
 *          consultation_hash:
 *            type: string
 *          submission_date:
 *            type: string
 *          feedback:
 *            type: string
 *          rating:
 *            type: number
 *          raid:
 *            type: boolean
 */

const Consultation = mongoose.model('Consultation', ConsultationSchema);

module.exports = Consultation;
