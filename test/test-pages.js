// Import the dependencies for testing
let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
let server = require('../app');

// get Heroku port magic
var port = process.env.PORT || process.argv[2] || 8080;
var path = '';

if (process.env.NODE_ENV === 'production') {
	path = 'https://gentle-island-36589.herokuapp.com/';
} else {
    path = 'http://localhost:' + port;
}

// Set up
chai.use(chaiHttp);

// Tests
describe("Main app", () => {
    describe("GET /", () => {
        it("should return our API directory successfully", (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});
