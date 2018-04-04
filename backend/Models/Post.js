var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({

    Title:{
        type: String,
        required: true
    },
    Desc:{
        type: String,
        required: true
    },
    Image:{
        type: String,
        required: true
    },
    Language:{
        type: String,
        required: true
    },
    CompanyType: {
      type: String,
      required: true
    },
    Link: {
        type: String,
        required:true
    },
    Tags: {
        type: Array,
        required:true
    },
    StartDate: {
        type: Date,
        required: true,
        default: Date.now
    }
    EndDate: {
        type: Date,
        required: true
    },
    PostType: {
        type: String,
        required: true
    },
    VacancyAvailable: {
        type: Number
    },
    PositionFilled: {
        type: Number
    },
    Highlighted: {
        type: Boolean,
        default: false
    },
    FilledByVC: {
        type: Boolean,
        default: false
    }
    Approved: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('post', PostSchema);
