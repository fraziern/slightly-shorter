require('dotenv').config();

var config = {};

var dbuser = process.env.MONGO_USER;
var dbpassword = process.env.MONGO_PW;
var mongoURIDev = 'mongodb://' + dbuser + ':' + dbpassword + '@ds015780.mlab.com:15780/heroku_dglx7xwj';
var mongoURITest = 'mongodb://localhost/test';

config.mongoURI = {
  development: mongoURIDev,
  test: mongoURITest
};

config.prefixURL = {
  development: 'http://slightly-shorter.herokuapp.com/',
  test: 'http://localhost:8080/'
};

module.exports = config;
