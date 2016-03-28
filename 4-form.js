var bodyparser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function (req, res) {
  var name = req.body.str.split('').reverse().join('').toString();
  res.end(name);
});

app.listen(process.argv[2]);
