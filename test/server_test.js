var assert = require('assert'),
    http  = require('http'),
    server = require('../lib/server');

describe('/', function() {
    it('should return 200', function(done) {
        http.get('http://localhost:8888', function(res) {
            debugger;
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should say "Hello, world!"', function(done) {
        http.get('http://localhost:8888', function(res) {
            var data = '';

            res.on('data', function(chunk) {
                data += chunk;
            });

            res.on('end', function() {
                assert.equal('Hello, world!\n', data);
                done();
            });
        });
    });
});