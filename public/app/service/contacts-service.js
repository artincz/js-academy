var app = angular.module('sample-app');

app.factory('contactsService', function() {

  var contacts = [
    {id: 1, name: 'Donald Black', company: 'Topicware', phone: '6-(880)062-6935', email: 'dblack0@mashable.com', note: 'Lorem ipsum'},
    {id: 2, name: 'Frank Little', company: 'Browseblab', phone: '9-(804)406-9373', email: 'flittle2@tumblr.com', note: 'Lorem ipsum'}
  ];

  var lastId = 2;

  return {
    create: function(contact) {
      contact.id = ++lastId;
      contacts.push(contact);
      return contact;
    },

    update: function(contact) {
      var contactIndex = _.findIndex(contacts, {id: contact.id});
      contacts[contactIndex] = contact;
      return contact;
    },

    find: function(id) {
      return _.clone(_.find(contacts, {id: +id}));
    },

    findAll: function() {
      return _.clone(contacts);
    }
  };
});
