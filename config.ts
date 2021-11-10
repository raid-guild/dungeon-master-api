import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI:
    process.env.MONGODB_URI || 'mongodb://localhost:27017/rageshipper',
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET
};
