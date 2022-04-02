require('dotenv').config();

const devMode = process.env.ENVIRONMENT === 'development' ? true : false;

const CONFIG = {
  MONGODB_URI: devMode
    ? process.env.MONGODB_URI_DEV
    : process.env.MONGODB_URI_PROD,
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET
};

module.exports = { CONFIG, devMode };
