import express, { Request, Response } from 'express';

import { updateMemberById } from '../controllers/member';
import { updateRaidById } from '../controllers/raid';
import { updatePortfolioById } from '../controllers/portfolio';
import { updateRaidPartyById } from '../controllers/raidparty';
import { updateConsultationBySubmissionHash } from '../controllers/consultation';

const UPDATE_ROUTER = express.Router();

UPDATE_ROUTER.patch('/member/:id', async (req: Request, res: Response) => {
  try {
    await updateMemberById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

UPDATE_ROUTER.patch(
  '/consultation/:submissionHash',
  async (req: Request, res: Response) => {
    try {
      await updateConsultationBySubmissionHash(
        req.params.submissionHash,
        req.body
      );
      res.status(200).json(req.body);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

UPDATE_ROUTER.patch('/raid/:id', async (req: Request, res: Response) => {
  try {
    await updateRaidById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

UPDATE_ROUTER.patch('/portfolio/:id', async (req: Request, res: Response) => {
  try {
    await updatePortfolioById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

UPDATE_ROUTER.patch('/raidparty/:id', async (req: Request, res: Response) => {
  try {
    await updateRaidPartyById(req.params.id, req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default UPDATE_ROUTER;
