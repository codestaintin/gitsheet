import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import lodash from 'lodash';
import bcrypt from 'bcrypt';
import User from '../models/user';
import validateRegistration from '../utils/registerValidator';
import validateLogin from '../utils/loginValidator';

dotenv.config();
const secret = process.env.TOKEN_SECRET;

const userController = {
  create(req, res) {
    const { errors, isValid } = validateRegistration(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    User.findOne({
      email: req.body.email
    })
      .then(foundUser => {
        if (foundUser) {
          return res.status(400).json({
            message: 'A user with that email already exists'
          });
        }
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
          if (err) return err;
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) return error;
            newUser.password = hash;
            newUser.save()
              .then(savedUser => {
                const user = lodash.pick(savedUser,
                  ['_id', 'firstName', 'lastName']
                );
                const token = jwt.sign(user, secret, { expiresIn: 86400 });
                return res.status(201).json({
                  message: 'Registration successful',
                  user,
                  token
                });
              })
              .catch(serverError => res.status(500).json(serverError));
          });
        });
      });
  },
  login(req, res) {
    const { errors, isValid } = validateLogin(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    const { email, password } = req.body;
    User.findOne({ email })
      .then(user => {
        if (!user) {
          errors.email = 'User not found';
          return res.status(404).json(errors);
        }
        bcrypt.compare(password, user.password)
          .then(foundUser => {
            if (foundUser) {
              const payload = lodash.pick(user,
                ['_id', 'firstName', 'lastName']
              );
              const token = jwt.sign(payload, secret, { expiresIn: 86400 });
              return res.status(200).json({
                message: 'Login successful',
                token
              });
            }
            return res.status(404).json({
              message: 'User not found'
            });
          });
      })
      .catch(serverError => res.status(500).json(serverError));
  }
};

export default userController;
