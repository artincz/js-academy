var _ = require('lodash');
var Datastore = require('nedb');
var contacts = new Datastore({ filename: 'data/contacts.db', autoload: true });

contacts.count({}, function(err, cnt) {
  if (cnt == 0) {
    contacts.insert([
      {name: 'Donald Black', company: 'Topicware', phone: '6-(880)062-6935', email: 'dblack0@mashable.com', note: 'Lorem ipsum'},
      {name: 'Frank Little', company: 'Browseblab', phone: '9-(804)406-9373', email: 'flittle2@tumblr.com', note: 'Lorem ipsum'}
    ]);
  }
});

module.exports = {
  find: function(id, cb) {
    contacts.findOne({_id: id}, cb);
  },

  findAll: function(cb) {
    contacts.find({}, cb)
  },

  update: function(id, contact, cb) {
    contacts.update({_id: id}, contact, {}, cb)
  },

  delete: function(id, cb) {
    contacts.remove({_id: id}, {}, cb);
  }
};
