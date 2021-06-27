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
  project_name: { type: String, required: true },
  contact_name: { type: String, required: true },
  contact_email: { type: String, required: true },
  contact_bio: { type: String, required: true },
  contact_discord: { type: String, required: false },
  contact_telegram: { type: String, required: false },
  preferred_contact: {
    type: String,
    enum: PREFERRED_CONTACT,
    required: true
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
  specs_link: { type: String, required: false },
  project_desc: { type: String, required: true },
  services_req: {
    type: [String],
    enum: SERVICES,
    required: true
  },
  desired_delivery: { type: Date, required: false },
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
  additional_info: { type: String, required: true },
  submission_type: {
    type: String,
    enum: SUBMISSION_TYPE,
    required: true
  },
  consultation_hash: { type: String, required: false },
  submission_date: {
    type: Date,
    default: Date.now(),
    required: true
  },
  feedback: { type: String, required: false },
  rating: { type: Number, required: false },
  raid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Raid',
    required: false
  }
});

const Consultation = mongoose.model('Consultation', ConsultationSchema);

module.exports = Consultation;
