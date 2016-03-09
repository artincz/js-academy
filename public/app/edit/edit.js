var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('edit', {
    parent: 'layout',
    url: '/edit/:id',
    templateUrl: 'app/edit/edit.html',
    controller: function($scope, $stateParams, $state, contactsService) {
        contactsService
          .find($stateParams.id)
          .then(function(contact) {
            $scope.contact = contact;
          });

      $scope.save = function() {
        contactsService.update($scope.contact);

        $state.go('show', {id: $scope.contact.id});
      };
    }
  });
});
