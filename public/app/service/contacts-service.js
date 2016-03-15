var app = angular.module('sample-app');

app.factory('contactsService', function($http) {

  return {
    create: function(contact) {
      console.warn('contactService.create not implemented!');
      return contact;
    },

    update: function(contact) {
      return $http.post('/api/contacts/' + contact.id, contact);
    },

    delete: function(id) {
      return $http.delete('/api/contacts/' + id);
    },

    find: function(id) {
      return $http.get('/api/contacts/' + id)
        .then(function(res) {
          return res.data;
        });
    },

    findAll: function() {
      return $http.get('/api/contacts')
        .then(function(res) {
          return res.data;
        });
    }
  };
});
