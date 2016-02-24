angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('new', {
    parent: 'layout',
    url: '/new',
    templateUrl: 'app/edit/edit.html',
    controller: function($scope, $state) {
      $scope.contact = {};

      $scope.save = function() {
        var maxId = contacts.reduce(function(prev, current) {
          return (prev.id > current.id) ? prev : current
        }).id;
        $scope.contact.id = maxId + 1;

        contacts.push($scope.contact);
        $state.go('show', {id: $scope.contact.id});
      };
    }
  });
});
