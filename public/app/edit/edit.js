angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('edit', {
      parent: 'layout',
      url: '/edit/:id',
      templateUrl: 'app/edit/edit.html',
      controller: function($scope, $stateParams, $state) {
        $scope.contact = contacts.filter(function(contact) {
          return contact.id == $stateParams.id;
        })[0];

        $scope.save = function() {
          $state.go('show', {id: $scope.contact.id});
        };
      }
    })
});
