var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var contacts = require('./api/contacts');

app.use(bodyParser.json());

app.get('/api/contacts', function(req, res) {
  res.json(contacts.findAll());
});

app.get('/api/contacts/:id', function(req, res) {
  res.json(contacts.find(req.params.id));
});

app.post('/api/contacts/:id', function(req, res) {
  var contact = req.body;
  contacts.update(req.params.id, contact);
  res.sendStatus(204);
});

app.delete('/api/contacts/:id', function(req, res) {
  contacts.delete(req.params.id);
  res.sendStatus(204);
});

app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
