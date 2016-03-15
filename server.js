var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var contacts = require('./api/contacts');

app.use(bodyParser.json());

app.get('/api/contacts', function(req, res) {
  res.json(contacts.findAll());
});

app.get('/api/contacts/:id', function(req, res) {
  var contact = contacts.find(req.params.id)
  if (contact) {
    res.json(contact);
  }
  else {
    res.sendStatus(404);
  }
});

app.post('/api/contacts/:id', function(req, res) {
  var contact = req.body;
  var success = contacts.update(req.params.id, contact);
  res.sendStatus(success ? 204 : 404);
});

app.delete('/api/contacts/:id', function(req, res) {
  var success = contacts.delete(req.params.id);
  res.sendStatus(success ? 204 : 404);
});

app.use(express.static('public'));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
