const express = require('express');

const consultation = require('../models/consultation');
const application = require('../models/application');
const raid = require('../models/raid');

const UPDATE_ROUTER = express.Router();

UPDATE_ROUTER.post('/consultation-raid-id', async (req, res) => {
  try {
    const { consultation_id, raid_id } = req.body;
    const response = await consultation.updateOne(
      { _id: consultation_id },
      { $set: { raid: raid_id } }
    );
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

UPDATE_ROUTER.post('/application-referrer', async (req, res) => {
  try {
    const { application_id, member_id } = req.body;
    const response = await application.updateOne(
      { _id: application_id },
      { $set: { referred_by: member_id } }
    );
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

UPDATE_ROUTER.post('/raid', async (req, res) => {
  try {
    const {
      raid_id,
      status,
      roles_required,
      raid_party,
      invoice_address,
      start_date,
      end_date,
      comment,
      related_raid,
      portfolio
    } = req.body;

    const document = await raid.findById(raid_id);

    document.status = status ? status : document.status;
    document.roles_required = roles_required
      ? category
      : document.roles_required;
    document.raid_party = raid_party ? raid_party : document.raid_party;
    document.invoice_address = invoice_address
      ? invoice_address
      : document.invoice_address;
    document.start_date = start_date ? start_date : document.start_date;
    document.end_date = end_date ? end_date : document.end_date;
    comment ? document.comment.push(comment) : document.comment;
    document.related_raid = related_raid ? related_raid : document.related_raid;
    document.portfolio = portfolio ? portfolio : document;

    const response = await document.save();
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

module.exports = UPDATE_ROUTER;
