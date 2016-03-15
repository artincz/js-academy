var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('show', {
    parent: 'layout',
    url: '/show/:id',
    templateUrl: 'app/show/show.html',
    controller: function($scope, $stateParams, $state, contactsService) {
      contactsService
        .find($stateParams.id)
        .then(function(contact) {
          $scope.contact = contact;
      });

      $scope.delete = function() {
        contactsService
          .delete($stateParams.id)
          .then(function() {
            $state.go('home');
          });
      };

    }
  });
});
