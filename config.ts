import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  ENVIRONMENT: process.env.ENVIRONMENT,
  MONGODB_URI:
    process.env.MONGODB_URI || 'mongodb://localhost:27017/rageshipper',
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET
};
