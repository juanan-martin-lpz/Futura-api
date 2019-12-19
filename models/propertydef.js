var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var Schema = mongoose.Schema;
var PropertyDef = new Schema({
    name: String,
    type: String
});

var PropertyDefModel = mongoose.model('PropertyDef', PropertyDef);

module.exports = PropertyDefModel;