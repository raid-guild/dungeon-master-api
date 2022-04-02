const express = require('express');

const { createConsultation } = require('../controllers/consultation');
const { createApplication } = require('../controllers/application');
const { createMember } = require('../controllers/member');
const { createRaid } = require('../controllers/raid');
const { createPortfolio } = require('../controllers/portfolio');
const { createRaidParty } = require('../controllers/raidparty');
const { createComment } = require('../controllers/comment');

const CREATE_ROUTER = express.Router();

CREATE_ROUTER.post('/consultation', async (req, res) => {
  try {
    const response = await createConsultation(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/application', async (req, res) => {
  try {
    const response = await createApplication(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/member', async (req, res) => {
  try {
    const response = await createMember(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/raid', async (req, res) => {
  try {
    const response = await createRaid(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/portfolio', async (req, res) => {
  try {
    const response = await createPortfolio(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/raidparty', async (req, res) => {
  try {
    const response = await createRaidParty(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/comment', async (req, res) => {
  try {
    const response = await createComment(req.body);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = CREATE_ROUTER;
