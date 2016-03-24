var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');

var contacts = require('./api/contacts');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cookieSession({keys: ['secret']}));

app.post('/api/login', function(req, res){
  /*if ( ! ... ){
    res.sendStatus(403);
  }*/

  req.session.user = {
    name: 'John Doe'
  };

  res.sendStatus(204);
});

app.post('/api/logout', function(req, res){
  req.session = null;

  res.sendStatus(204);
});

app.use(function(req, res, next){
  if ( ! req.session.user){
    return res.sendStatus(401);
  }

  next();
});

app.get('/api/user', function(req, res){
  res.send(req.session.user);
});

app.get('/api/contacts', function(req, res) {
  contacts.findAll(function(err, docs) {
    if (err) {
      res.sendStatus(500);
    }
    else {
      res.json(docs);
    }
  });
});

app.get('/api/contacts/:id', function(req, res) {
  contacts.find(req.params.id, function(err, doc) {
    if (err) {
      res.sendStatus(500);
    }
    else if (!doc) {
      res.sendStatus(404);
    }
    else {
      res.json(doc);
    }
  });
});

app.post('/api/contacts', function(req, res) {
  var contact = req.body;
  contacts.insert(contact, function(err, newContact) {
    if (err) {
      res.sendStatus(500);
    }
    else {
      res.status(201).json(newContact);
    }
  });
});

app.post('/api/contacts/:id', function(req, res) {
  var contact = req.body;
  contacts.update(req.params.id, contact, function(err, cnt) {
    if (err) {
      res.sendStatus(500);
    }
    else if (cnt == 0) {
      res.sendStatus(404);
    }
    else {
      res.sendStatus(204);
    }
  });
});

app.delete('/api/contacts/:id', function(req, res) {
  contacts.delete(req.params.id, function(err, cnt) {
    if (err) {
      res.sendStatus(500);
    }
    else if (cnt == 0) {
      res.sendStatus(404);
    }
    else {
      res.sendStatus(204);
    }
  });
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
