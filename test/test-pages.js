var expect  = require('chai').expect;
var request = require('request');

var port = process.env.PORT || process.argv[2] || 8080;
var path = '';

if (process.env.NODE_ENV === 'production') {
	path = 'https://gentle-island-36589.herokuapp.com/';
} else {
    path = 'http://localhost:' + port;
}

it('Main page status', function(done) {
    console.log(path);
    request(path, function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
