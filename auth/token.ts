/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { CONFIG } from '../config';

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  if (CONFIG.ENVIRONMENT === 'development') {
    return next();
  }

  if (CONFIG.ENVIRONMENT === 'production') {
    const auth_header = req.headers.authorization;
    const token = auth_header && auth_header.split(' ')[1];

    if (token == null) return res.status(401).json('Not Authenticated!');

    verify(token, CONFIG.JWT_SECRET, (err, data) => {
      if (err) return res.status(401).json('Invalid Token!');
      next();
    });
  }

  if (
    CONFIG.ENVIRONMENT !== 'development' &&
    CONFIG.ENVIRONMENT !== 'production'
  ) {
    return res.status(500).json('Server Error!');
  }
};
