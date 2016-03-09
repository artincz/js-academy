var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('home', {
      parent: 'layout',
      url: '/',
      templateUrl: 'app/home/home.html',
      controller: function($scope, contactsService) {
        $scope.contacts = contactsService.findAll();
      }
    })
});
