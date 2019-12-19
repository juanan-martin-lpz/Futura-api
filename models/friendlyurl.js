var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

// Solo para GETs

var Schema = mongoose.Schema;
var FriendlyUrl = new Schema({
  post: ObjectId, // Post
  url: String
});

var FriendlyUrlModel = mongoose.model('FriendlyUrl', FriendlyUrl);

module.exports = PostModel;
