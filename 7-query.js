var express = require('express');
var app = express();

app.get('/search', function (req, res) {
  var qry = req.query;

  res.send(qry);
})

app.listen(process.argv[2]);
