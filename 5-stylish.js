var path = require('path');
var express = require('express');
var app = express();

app.use(require('stylus').middleware('node_modules/stylus/'))
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))

app.get('/main.css', function () {

})

app.listen(process.argv[2]);
