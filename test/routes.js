'use strict';
var request = require("supertest")
	, should = require("should")
	, express = require("express");

var app = require('../app.js');
describe('index',function() {
	it('should respond with vcommerce',function(done) {
		request(app)
			.get('/')
			.expect(200)
			.end(function(req,res) {
				res.status.should.eql(200);
				res.text.should.containEql('Vcommerce');
				done();
			});
	});
});