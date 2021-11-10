import express, { Request, Response } from 'express';

import { createConsultation } from '../controllers/consultation';
import { createApplication } from '../controllers/application';
import { createMember } from '../controllers/member';
import { createRaid } from '../controllers/raid';
import { createPortfolio } from '../controllers/portfolio';
import { createRaidParty } from '../controllers/raidparty';
import { createComment } from '../controllers/comment';

const CREATE_ROUTER = express.Router();

CREATE_ROUTER.post('/consultation', async (req: Request, res: Response) => {
  try {
    const response = await createConsultation(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/application', async (req: Request, res: Response) => {
  try {
    const response = await createApplication(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/member', async (req: Request, res: Response) => {
  try {
    const response = await createMember(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/raid', async (req: Request, res: Response) => {
  try {
    const response = await createRaid(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/portfolio', async (req: Request, res: Response) => {
  try {
    const response = await createPortfolio(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/raidparty', async (req: Request, res: Response) => {
  try {
    const response = await createRaidParty(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

CREATE_ROUTER.post('/comment', async (req: Request, res: Response) => {
  try {
    const response = await createComment(req.body);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default CREATE_ROUTER;
