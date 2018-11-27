import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../models/user';

dotenv.config();
const secret = process.env.TOKEN_SECRET;

const authorization = {
  verifyToken(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
      jwt.verify(token, secret, (error, decoded) => {
        if (error) {
          return res.status(401).json({
            message: 'Invalid authorisation credentials'
          });
        }
        User.findById(decoded._id)
          .then((user) => {
            if (!user) {
              return res.status(404).json({ message: 'User does not exist' });
            }
            req.decoded = decoded;
            return next();
          })
          .catch(err => res.status(404).json(err));
      });
    } else {
      res.status(403).json({ message: 'Token not provided' });
    }
  },
  verifyAdmin(req, res, next) {
    User.findById(req.decoded._id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
        if (user.roles === 'admin') {
          return next();
        }
        return res.status(403).json({
          message: 'Unauthorised user'
        });
      });
  }
};

export default authorization;