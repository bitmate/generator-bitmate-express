const request = require('supertest');
const app = require('./app');

describe('Base Router:', () => {
  it('returns 200 for /', done => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('returns 404 everything else', done => {
    request(app)
      .get('/api/bar')
      .expect(404, done);
  });
});
