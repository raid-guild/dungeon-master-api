import express, { Request, Response } from 'express';

import { createConsultation } from '../controllers/consultation';
import { createApplication } from '../controllers/application';
import { createMember } from '../controllers/member';
import { createRaid } from '../controllers/raid';
import { createPortfolio } from '../controllers/portfolio';
import { createRaidParty } from '../controllers/raidparty';
import { createComment } from '../controllers/comment';

const CREATE_ROUTER = express.Router();

/**
 * @swagger
 * /create/consultation:
 *   post:
 *     tags: [Consultations]
 *     requestBody:
 *        name: consultation
 *        description: New consultation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Consultation'
 *     responses:
 *       201:
 *         description: Created a consultation
 */

CREATE_ROUTER.post('/consultation', async (req: Request, res: Response) => {
  try {
    const response = await createConsultation(req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR', error: err });
  }
});

/**
 * @swagger
 * /create/application:
 *   post:
 *     tags: [Applications]
 *     requestBody:
 *        name: application
 *        description: New application
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Application'
 *     responses:
 *       201:
 *         description: Created a application
 */

CREATE_ROUTER.post('/application', async (req: Request, res: Response) => {
  try {
    const response = await createApplication(req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

/**
 * @swagger
 * /create/member:
 *   post:
 *     tags: [Members]
 *     requestBody:
 *        name: member
 *        description: New member
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Member'
 *     responses:
 *       201:
 *         description: Created a member
 */

CREATE_ROUTER.post('/member', async (req: Request, res: Response) => {
  try {
    const response = await createMember(req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

/**
 * @swagger
 * /create/raid:
 *   post:
 *     tags: [Raids]
 *     requestBody:
 *        name: raid
 *        description: New raid
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Raid'
 *     responses:
 *       201:
 *         description: Created a raid
 */

CREATE_ROUTER.post('/raid', async (req: Request, res: Response) => {
  try {
    const response = await createRaid(req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

/**
 * @swagger
 * /create/portfolio:
 *   post:
 *     tags: [Portfolios]
 *     requestBody:
 *        name: portfolio
 *        description: New portfolio
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Portfolio'
 *     responses:
 *       201:
 *         description: Created a portfolio
 */

CREATE_ROUTER.post('/portfolio', async (req: Request, res: Response) => {
  try {
    const response = await createPortfolio(req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

/**
 * @swagger
 * /create/raidparty:
 *   post:
 *     tags: [RaidParties]
 *     requestBody:
 *        name: raidparty
 *        description: New raidparty
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/RaidParty'
 *     responses:
 *       201:
 *         description: Created a raidparty
 */

CREATE_ROUTER.post('/raidparty', async (req: Request, res: Response) => {
  try {
    const response = await createRaidParty(req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

/**
 * @swagger
 * /create/comment:
 *   post:
 *     tags: [Comments]
 *     requestBody:
 *        name: comment
 *        description: New comment
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *     responses:
 *       201:
 *         description: Created a comment
 */

CREATE_ROUTER.post('/comment', async (req: Request, res: Response) => {
  try {
    const response = await createComment(req.body);
    console.log(response);
    res.json({ status: 'OK' });
  } catch (err) {
    console.log(err);
    res.json({ status: 'ERROR' });
  }
});

export default CREATE_ROUTER;
