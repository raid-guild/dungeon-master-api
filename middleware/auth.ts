import { Request, Response, NextFunction } from 'express';

import { validateRequest } from '../auth/token';
import { CONFIG } from '../config';

export const expressAuth = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  if (
    CONFIG.ENVIRONMENT === 'production' ||
    CONFIG.ENVIRONMENT === 'development'
  ) {
    try {
      validateRequest(req.headers.authorization);
      next();
    } catch (err) {
      res.status(401).send('Unauthorized');
    }
  } else if (
    CONFIG.ENVIRONMENT !== 'production' &&
    CONFIG.ENVIRONMENT !== 'development'
  ) {
    res.status(401).send('Invalid environment');
  }
};

export const graphAuth = (req: Request): any => {
  if (
    CONFIG.ENVIRONMENT === 'production' ||
    CONFIG.ENVIRONMENT === 'development'
  ) {
    return validateRequest(req.headers.authorization);
  }
  return req;
};
