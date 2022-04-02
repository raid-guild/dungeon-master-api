const express = require('express');

const { updateMemberById } = require('../controllers/member');
const { updateRaidById } = require('../controllers/raid');
const { updatePortfolioById } = require('../controllers/portfolio');
const { updateRaidPartyById } = require('../controllers/raidparty');
const {
  updateConsultationBySubmissionHash
} = require('../controllers/consultation');

const UPDATE_ROUTER = express.Router();

UPDATE_ROUTER.patch('/member/:id', async (req, res) => {
  try {
    await updateMemberById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

UPDATE_ROUTER.patch('/consultation', async (req, res) => {
  try {
    await updateConsultationBySubmissionHash(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

UPDATE_ROUTER.patch('/raid/:id', async (req, res) => {
  try {
    await updateRaidById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

UPDATE_ROUTER.patch('/portfolio/:id', async (req, res) => {
  try {
    await updatePortfolioById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

UPDATE_ROUTER.patch('/raidparty/:id', async (req, res) => {
  try {
    await updateRaidPartyById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = UPDATE_ROUTER;
