import request from 'supertest';
import dotenv from 'dotenv';
import { expect } from 'chai';
import server from '../../server';

dotenv.config();

describe('Test cases for all git sheet actions', () => {
  let token;
  before((done) => {
    request(server)
      .post('/api/v1/users/signin')
      .send({
        email: 'joe@gmail.com',
        password: 'checkam'
      })
      .end((err, res) => {
        if (err) return done(err);
        if (res) {
          // eslint-disable-next-line prefer-destructuring
          token = res.body.token;
        }
        done();
      });
  });

  describe('GET /api/v1/allSheets when getting all sheets', () => {
    it('should return a reponse of 200 when operation is successful',
      (done) => {
        request(server)
          .get('/api/v1/allSheets')
          .set({ 'x-access-token': token })
          .end((err, res) => {
            if (err) return done(err);
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an('array');
            done();
          });
      });
  });
});