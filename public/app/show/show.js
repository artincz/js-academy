var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('show', {
    parent: 'layout',
    url: '/show/:id',
    templateUrl: 'app/show/show.html',
    controller: function($scope, $stateParams, contactsService) {

      $scope.contact = contactsService.find($stateParams.id);

    }
  });
});
