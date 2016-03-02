angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('new', {
    parent: 'layout',
    url: '/new',
    templateUrl: 'app/edit/edit.html',
    controller: function($scope, $state, contactService) {
      $scope.contact = {};

      $scope.save = function() {
        $scope.contact = contactService.create($scope.contact);

        $state.go('show', {id: $scope.contact.id});
      };
    }
  });
});
