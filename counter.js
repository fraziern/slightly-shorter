var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var counterSchema = new Schema({
  counter: Number
});

module.exports = mongoose.model('counter', counterSchema);
