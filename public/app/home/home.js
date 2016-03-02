angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('home', {
      parent: 'layout',
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: function($scope, contactService) {
        $scope.contacts = contactService.findAll();

        $scope.sort = {
          by: 'name',
          asc: true
        };

        $scope.sortBy = function(column) {
          if (column === $scope.sort.by) {
            $scope.sort.asc = !$scope.sort.asc;
          }
          else {
            $scope.sort.by = column;
            $scope.sort.asc = true;
          }
        };
      }
    })
});
