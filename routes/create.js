const express = require('express');

const application = require('../models/application');
const consultation = require('../models/consultation');
const member = require('../models/member');
const raid = require('../models/raid');
const portfolio = require('../models/portfolio');
const raidparty = require('../models/raidparty');
const comment = require('../models/comment');

const CREATE_ROUTER = express.Router();

CREATE_ROUTER.post('/consultation', async (req, res) => {
  try {
    const record = req.body;
    const response = await consultation.create(record);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

CREATE_ROUTER.post('/application', async (req, res) => {
  try {
    const record = req.body;
    const response = await application.create(record);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

CREATE_ROUTER.post('/member', async (req, res) => {
  try {
    const record = req.body;
    const response = await member.create(record);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

CREATE_ROUTER.post('/raid', async (req, res) => {
  try {
    const record = req.body;
    const response = await raid.create(record);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

CREATE_ROUTER.post('/portfolio', async (req, res) => {
  try {
    const record = req.body;
    const response = await portfolio.create(record);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

CREATE_ROUTER.post('/raidparty', async (req, res) => {
  try {
    const record = req.body;
    const response = await raidparty.create(record);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

CREATE_ROUTER.post('/comment', async (req, res) => {
  try {
    const record = req.body;
    const response = await comment.create(record);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

module.exports = CREATE_ROUTER;
