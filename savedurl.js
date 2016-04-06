var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var savedurlSchema = new Schema({
  code: Number,
  url: String
});

module.exports = mongoose.model('savedurls', savedurlSchema);
