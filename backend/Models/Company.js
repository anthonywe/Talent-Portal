
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = new Schema({

  CompanyName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  Phone: {
    type: String,
    required: true
  },
  ContactPerson: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Logo: {
    type: String
  }

})

module.exports = mongoose.model('Company', CompanySchema);
