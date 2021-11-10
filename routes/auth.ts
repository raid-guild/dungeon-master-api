import express, { Request, Response } from 'express';
import { createToken, verifySignature } from '../auth/token';
import { Member } from '../models/member';

const AUTH_ROUTER = express.Router();

AUTH_ROUTER.post('/create/token', (req: Request, res: Response) => {
  try {
    Member.exists({ eth_address: req.body.address }, (err, exists) => {
      if (err) {
        res.status(500).json(err);
      }
      if (!exists) {
        res.status(500).json('Not a member');
      } else {
        const tokenToSign = createToken(req.body.address);
        res.status(200).json(`${tokenToSign}`);
      }
    });
  } catch (err) {
    res.status(500).json('Internal Error.');
  }
});

AUTH_ROUTER.post('/verify/signature', async (req: Request, res: Response) => {
  const { token, signature } = req.body;
  try {
    const verifiedToken = await verifySignature(token, signature);
    res.status(200).json(verifiedToken);
  } catch (err) {
    res.status(500).json('Internal Error.');
  }
});

export default AUTH_ROUTER;
