process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var mongoose = require('mongoose');

var server = require('../server');
var Savedurl = require('../savedurl');

var should = chai.should();
chai.use(chaiHttp);

describe('Savedurls', function() {

  Savedurl.collection.drop();

  beforeEach(function (done) {
    var newSavedurl = new Savedurl({
      code: 123,
      url: 'http%3A%2F%2Fwww.google.com%2F'
    });
    newSavedurl.save(function(err) {
      done();
    });
  });
  afterEach(function (done) {
    Savedurl.collection.drop();
    done();
  });

});

describe('tinyurls', function() {
  it('should add a tinyurl on /<url> GET');
  it('should redirect to a saved URL on /<id> GET');
});
