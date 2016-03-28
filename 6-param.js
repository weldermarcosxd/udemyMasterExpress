var crypto = require('crypto');
var express = require('express');
var app = express();

app.put('/message/:id', function (req, res) {
  var id = req.params.id;

  var sha1 = crypto.createHash("sha1").update(new Date().toDateString() + id).digest("hex");

  res.send(sha1);
});

app.listen(process.argv[2]);
