var request = require('supertest');
describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./index', { bustCache: true });
  });
  afterEach(function () {
    server.close();
  });
  it('responds to /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(200, done);
  });
  it('responds to /notok with 500', function testSlash(done) {
  request(server)
    .get('/notok')
    .expect(500, done);
  });
  it('404 everything else', function testPath(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
