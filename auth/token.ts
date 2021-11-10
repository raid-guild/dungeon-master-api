import { sign, verify } from 'jsonwebtoken';
import { utils } from 'ethers';

import { Token } from '../models/token';
import { CONFIG } from '../config';

// create token to sign
export const createToken = (_address: string): string => {
  const tokenData = {
    address: _address,
    timestamp: Date.now()
  };
  const token = sign(tokenData, CONFIG.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

// verify signature
export const verifySignature = async (
  _token: string,
  _signature: string
): Promise<any> => {
  return verify(_token, CONFIG.JWT_SECRET, async (err, data) => {
    if (err) {
      return 'Invalid token.';
    }

    try {
      const msgHash = utils.hashMessage(_token);
      const msgHashBytes = utils.arrayify(msgHash);
      const account = utils.recoverAddress(msgHashBytes, `0x${_signature}`);

      if (data.address !== account) {
        return 'Invalid signature.';
      }

      await Token.create({ token: _token, eth_address: data.address });
      return _token;
    } catch (signatureError) {
      return 'Invalid signature.';
    }
  });
};

// verify token
export const verifyToken = async (_token: string): Promise<any> => {
  try {
    const mongoTokenData = await Token.findOne({ token: _token });

    verify(mongoTokenData.token, CONFIG.JWT_SECRET, async (err, data) => {
      if (err.name === 'TokenExpiredError') {
        await Token.deleteOne({ token: _token });
        throw new Error('Token expired');
      }
      if (err.name === 'JsonWebTokenError') {
        throw new Error('Invalid token');
      }
      if (mongoTokenData.eth_address !== data.address) {
        throw new Error('Invalid token');
      }
      return data;
    });

    throw new Error('Token not found');
  } catch (err) {
    throw new Error('Invalid token');
  }
};

// validate requests
export const validateRequest = (authorization: string): any => {
  const token = authorization && authorization.split(' ')[1];

  if (token == null) {
    throw new Error('No token provided');
  }

  try {
    const tokenData = verifyToken(token);
    return tokenData;
  } catch (err) {
    throw new Error('Invalid token');
  }
};
