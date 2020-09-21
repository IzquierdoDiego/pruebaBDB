const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "http://localhost:3000/api/locations";
const util = require("util");

describe('list locations', function() {
    it('list locations', function(done) {
        request.get({ url: baseUrl},
            function(error, response, body) {
            		const bodyObj = JSON.parse(body);
                    expect(response.statusCode).to.equal(200);
                    console.log(body);
                done();
            });
    });
}); 