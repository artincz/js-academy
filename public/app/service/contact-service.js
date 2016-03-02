angular.module('contacts-app').factory('contactService', function() {

  var contacts = [
    {id: 1, name: 'Donald Black', company: 'Topicware', phone: '6-(880)062-6935', email: 'dblack0@mashable.com', note: 'Lorem ipsum', birthdate: new Date(1982, 11, 24)},
    {id: 2, name: 'Frank Little', company: 'Browseblab', phone: '9-(804)406-9373', email: 'flittle2@tumblr.com', note: 'Lorem ipsum', birthdate: new Date(1990, 0, 1)}
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

