var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// this is meant to store a running counter. the "id" field should never change.

var counterSchema = new Schema({
  id: { type: Number, default: 0 },
  counter: { type: Number, default: 0 } });

module.exports = mongoose.model('counter', counterSchema);
