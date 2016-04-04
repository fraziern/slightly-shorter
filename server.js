// TODO: the usual requires and such

var dbuser = process.env.MONGO_USER;
var dbpassword = process.env.MONGO_PW;
var mongoURI = 'mongodb://' + dbuser + ':' + dbpassword +
  '@ds015780.mlab.com:15780/heroku_dglx7xwj';
