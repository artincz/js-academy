var express = require('express');
var app = express();

var contacts = require('./api/contacts');

app.get('/api/contacts', function(req, res) {
  res.json(contacts.findAll());
});

app.get('/api/contacts/:id', function(req, res) {
  res.json(contacts.find(req.params.id));
});

app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
