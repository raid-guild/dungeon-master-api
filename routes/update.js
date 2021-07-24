const express = require('express');

const { updateMemberById } = require('../controllers/member');
const { updateRaidById } = require('../controllers/raid');
const { updatePortfolioById } = require('../controllers/portfolio');
const { updateRaidPartyById } = require('../controllers/raidparty');
const { updateCommentById } = require('../controllers/comment');

const UPDATE_ROUTER = express.Router();

/**
 * @swagger
 * /update/member/{id}:
 *   patch:
 *     tags: [Members]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The id of the member
 *     requestBody:
 *        name: member
 *        description: Update member
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email_address:
 *                  type: string
 *                discord_handle:
 *                  type: string
 *                telegram_handle:
 *                  type: string
 *                github_handle:
 *                  type: string
 *                eth_address:
 *                  type: string
 *                ens_name:
 *                  type: string
 *                guild_class:
 *                  type: string
 *                primary_skills:
 *                  type: array
 *                  items:
 *                    type: string
 *                secondary_skills:
 *                  type: array
 *                  items:
 *                    type: string
 *                membership_date:
 *                  type: string
 *                is_raiding:
 *                  type: boolean
 *                championed_by:
 *                  type: string
 *                application:
 *                  type: string
 *     responses:
 *       201:
 *         description: Updated member
 */

UPDATE_ROUTER.patch('/member/:id', async (req, res) => {
  try {
    const response = await updateMemberById(req.params.id, req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

/**
 * @swagger
 * /update/raid/{id}:
 *   patch:
 *     tags: [Raids]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The id of the raid
 *     requestBody:
 *        name: raid
 *        description: Update raid
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                raid_name:
 *                  type: string
 *                status:
 *                  type: string
 *                category:
 *                  type: string
 *                cleric_name:
 *                  type: string
 *                roles_required:
 *                  type: array
 *                  items:
 *                    type: string
 *                raid_party:
 *                  type: string
 *                invoice_address:
 *                  type: string
 *                start_date:
 *                  type: string
 *                end_date:
 *                  type: string
 *                comments:
 *                  type: array
 *                  items:
 *                    type: string
 *                related_raids:
 *                  type: array
 *                  items:
 *                    type: string
 *                portfolio:
 *                  type: string
 *     responses:
 *       201:
 *         description: Updated raid
 */

UPDATE_ROUTER.patch('/raid/:id', async (req, res) => {
  try {
    const response = await updateRaidById(req.params.id, req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

/**
 * @swagger
 * /update/portfolio/{id}:
 *   patch:
 *     tags: [Portfolios]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The id of the portfolio
 *     requestBody:
 *        name: portfolio
 *        description: Update portfolio
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                project_name:
 *                  type: string
 *                project_desc:
 *                  type: string
 *                category:
 *                  type: string
 *                roles:
 *                  type: array
 *                  items:
 *                    type: string
 *                case_study:
 *                  type: string
 *                repo_link:
 *                  type: string
 *                result_link:
 *                  type: string
 *     responses:
 *       201:
 *         description: Updated portfolio
 */

UPDATE_ROUTER.patch('/portfolio/:id', async (req, res) => {
  try {
    const response = await updatePortfolioById(req.params.id, req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

/**
 * @swagger
 * /update/raidparty/{id}:
 *   patch:
 *     tags: [RaidParties]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The id of the raidparty
 *     requestBody:
 *        name: raidparty
 *        description: Update raidparty
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                members:
 *                  type: array
 *                  items:
 *                    type: string
 *                raid:
 *                  type: string
 *     responses:
 *       201:
 *         description: Updated raidparty
 */

UPDATE_ROUTER.patch('/raidparty/:id', async (req, res) => {
  try {
    const response = await updateRaidPartyById(req.params.id, req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

/**
 * @swagger
 * /update/comment/{id}:
 *   patch:
 *     tags: [Comments]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The id of the comment
 *     requestBody:
 *        name: comment
 *        description: Update comment
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                comment:
 *                  type: string
 *                commented_raid:
 *                  type: string
 *     responses:
 *       201:
 *         description: Updated comment
 */

UPDATE_ROUTER.patch('/comment/:id', async (req, res) => {
  try {
    const response = await updateCommentById(req.params.id, req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

module.exports = UPDATE_ROUTER;
