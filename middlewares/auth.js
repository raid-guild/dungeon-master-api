const { verify } = require('jsonwebtoken');

const { CONFIG } = require('../config');

const verifyToken = (req) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];

  if (token == null) {
    return false;
  }

  try {
    verify(token, CONFIG.JWT_SECRET);
    return true;
  } catch (err) {
    return false;
  }
};

const validateRequest = (req, res, next) => {
  if (!verifyToken(req)) {
    res.status(401).send('Unauthorized');
  } else {
    next();
  }
};

module.exports = { verifyToken, validateRequest };
