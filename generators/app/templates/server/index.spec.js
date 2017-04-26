/* eslint no-undef: 0 */  // --> OFF
const app = require('./app');

after(done => {
  app.bitmate.on('close', () => done());
  app.bitmate.close();
});
