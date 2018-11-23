/* eslint-disable */
import request from 'supertest';
import dotenv from 'dotenv';
import { expect } from 'chai';
import mongoose from 'mongoose';
import server from '../../server';

dotenv.config();

describe('Tests for auth action', () => {
  before((done) => {
    mongoose.createConnection(`mongodb://localhost:27017/gitsheet_test`, () => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
  });

  it('should register a new user with valid credentials', (done) => {
    const newUser = {
      firstName: 'Joe',
      lastName: 'Okonji',
      email: 'joe@gmail.com',
      password: 'checkam',
      confirmPassword: 'checkam'
    };
    request(server)
    .post('/api/v1/users/signup')
    .send(newUser)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).to.equal(201);
      expect(res.body.message).to.equal('Registration successful');
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('token');
      expect(res.body).to.have.property('user');
      expect(res.body.user).to.have.property('id');
      expect(res.body.user).to.have.property('firstName');
      expect(res.body.user).to.have.property('lastName');

      done();
    })
  });

  it('should login a user successfully', (done) => {
    request(server)
    .post('/api/v1/users/signin')
    .send({
      email: 'joe@gmail.com',
      password: 'checkam'
    })
    .end((err, res) => {
      if (err) return done(err);
      expect(res.status).to.equal(200);
      expect(res.body.message).to.equal('Login successful');
      expect(res.body).to.have.property('message');
      expect(res.body).to.have.property('token');
      done();
    });
  });
});