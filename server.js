process.env.NODE_ENV = 'test';

var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();
var config = require('./_config');
var app = express();

var Savedurl = require('savedurl');
var Counter = require('counter');

mongoose.connect(config.mongoURI[app.settings.env], function (err, res) {
  if (err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});

// route '/new' to save the URL as a new document in mongo, with id

app.get('/new/:id', function (req, res) {
  res.send(req.params.id);
});

app.get('/', function (req, res) {
  res.send('Hi!');
});

app.get('/:id', function (req, res) {
  res.send(req.params.id);
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
