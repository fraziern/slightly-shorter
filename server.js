var mongoose = require('mongoose');
require('dotenv').config();

// var dbuser = process.env.MONGO_USER;
// var dbpassword = process.env.MONGO_PW;
// var mongoURI = 'mongodb://' + dbuser + ':' + dbpassword +
//   '@ds015780.mlab.com:15780/heroku_dglx7xwj';

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connect!');
  db.close();
});
