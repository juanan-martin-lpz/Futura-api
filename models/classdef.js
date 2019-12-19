var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var PropertyDef = require('./propertydef');


var Schema = mongoose.Schema;

var ClassDef = new Schema({
    name: String,
    type: ObjectId, // ClassDef
    properties: [{ type: ObjectId, ref: 'PropertyDef' }] // PropertyDef
});


ClassDef.method('getObject', function() {

    console.log('getObject');

    var obj = {};

    this.properties.forEach((p) => {
        /*
        var prQ = PropertyDef.findOne({ _id: p });
        var pr = {};

        prQ.exec(answer => {
            pr = answer;
        });
        */

        console.log(p);

        Object.defineProperty(obj, p.name, {
            writable: true,
            enumerable: true,
            configurable: true
        });

    });

    console.log(obj);

    return obj;
});

var ClassDefModel = mongoose.model('ClassDef', ClassDef);

module.exports = ClassDefModel;