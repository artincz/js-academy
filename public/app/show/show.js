angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('show', {
      parent: 'layout',
      url: '/show/:id',
      templateUrl: 'app/show/show.html',
      controller: function($scope, $stateParams){
        $scope.contact = contacts.filter(function(contact) {
          return contact.id == $stateParams.id;
        })[0];
      }
    })
});
