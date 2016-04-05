var assert = require('chai').assert;
var mongoose = require('mongoose');
require('dotenv').config();

describe('DBconnect', function() {
  // var dbuser = process.env.MONGO_USER;
  // var dbpassword = process.env.MONGO_PW;
  // var mongoURI = 'mongodb://' + dbuser + ':' + dbpassword +
  // '@ds015780.mlab.com:15780/heroku_dglx7xwj';
  var mongoURI = 'mongodb://localhost/test';
  mongoose.connect(mongoURI);

  it('should not throw an error when trying to connect', function() {
    assert.doesNotThrow(function() {
      var db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.once('open', function() {
        console.log('connected!');
        var kittySchema = mongoose.Schema({
          name: String
        });
        var Kitten = mongoose.model('Kitten', kittySchema);
        var silence = new Kitten({ name: 'Silence' });
        silence.save(function (err,silence) {
          if (err) throw err;
          console.log(silence);

          Kitten.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
          });
        });


      });
    });
  });
});
