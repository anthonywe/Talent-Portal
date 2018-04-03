var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



// bodyparser
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('Back-end for StudentPortal');
});



app.listen(8080, function () {
  console.log('listening on port 8080');
});
