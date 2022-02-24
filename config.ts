import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  MONGODB_URI_PRODUCTION: process.env.MONGODB_URI,
  MONGODB_URI_DEVELOPMENT: process.env.LOCAL_MONGODB_URI,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET
};
