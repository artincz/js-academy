angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('edit', {
      parent: 'layout',
      url: '/edit/:id',
      templateUrl: 'app/edit/edit.html',
      controller: function($scope, $stateParams, $state, contactService) {
        $scope.contact = contactService.find($stateParams.id);

        $scope.save = function() {
          $scope.contact = contactService.update($scope.contact);

          $state.go('show', {id: $scope.contact.id});
        };
      }
    })
});
