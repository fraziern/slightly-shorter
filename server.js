process.env.NODE_ENV = 'development';

var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();
var config = require('./_config');
var app = express();

var Savedurl = require('./savedurl');
var Counter = require('./counter');

var prefix = config.prefixURL[app.settings.env];

// URL regex
var re = /(https?:\/\/)([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;

mongoose.connect(config.mongoURI[app.settings.env], function (err) {
  if (err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});

// Check Counter and populate if nothing there
Counter.findOne({ id: 0 }, function(err, counters) {
  if (!counters) {
    // empty, we need to seed using a doc with default values
    var counter = new Counter();
    counter.save(function (err, counter) {
      if (err) return console.error(err);
      console.log('Seeded counter: ' + counter);
    });
  }
});

// route '/new' to save the URL as a new document in mongo, with id
app.get('/new/*', function (req, res) {
  var url = req.params[0];
  if (!re.test(url)) {
    res.json({
      original_url: 'Error: Invalid URL' });
    return;
  }
  Counter.findOneAndUpdate({ id: 0 }, { $inc: { counter: 1 }}, function (err, data) {
    if (err) return console.error(err);
    var savedurl = new Savedurl({
      code: data.counter,
      url: url });
    savedurl.save(newUrlResponse(err, savedurl, res));
  });
});

function newUrlResponse (err, savedurl, res) {
  if (err) return console.error(err);
  var returnObj = {
    original_url: savedurl.url,
    short_url: prefix + savedurl.code };
  res.json(returnObj);
}

// Send static page with instructions at root directory
app.get('/', function (req, res) {
  res.send('Hi!');
});

// redirect if valid ID given
app.get('/:id', function (req, res) {
  var code = Number(req.params.id);
  if (!code) res.status(404).send('Not found');
  Savedurl.findOne({ code: code }, function (err, doc) {
    if (err) return console.error(err);
    if (doc == null) res.status(404).send('ID ' + code + ' not found');
    else {
      res.redirect(doc.url);
    }
  });
});

var port = process.env.PORT || 8080;
app.listen(port,  function () {
  console.log('Node.js listening on port ' + port + '...');
});
