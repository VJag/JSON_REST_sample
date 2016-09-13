var countries = require('./countries.json');

var express = require('express');
var app = express();


// This responds a GET request for the /countries page.
app.get('/countries', function (req, res) {
   res.send(countries);
})


var server = app.listen(9999, function () {

  var port = server.address().port;
  console.log("App is listening at port", port);

})