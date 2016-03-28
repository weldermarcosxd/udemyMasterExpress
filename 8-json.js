var fs = require('fs');
var express = require('express');
var app = express();

app.get('/books', function (req, res) {

  fs.readFile(process.argv[3], function (err, data) {
    if(err){
      console.error('Erroo: ' + err);
    }else {
      json = JSON.parse(data);
      res.json(json);
    }
  })
})

app.listen(process.argv[2]);
