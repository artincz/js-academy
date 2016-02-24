angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('home', {
      parent: 'layout',
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: function($scope) {
        $scope.contacts = contacts;
      }
    })
});
