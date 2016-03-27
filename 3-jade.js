var path = require('path');
var express = require('express');
var app = express();


app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function (req, res) {
  res.render(process.argv[3], {date: new Date().toDateString()});
})

app.listen(process.argv[2]);
