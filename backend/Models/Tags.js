var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagsSchema = new Schema({

    TagName:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('tags', TagsSchema);
