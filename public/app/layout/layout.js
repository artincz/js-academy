angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('layout', {
    abstract: true,
    templateUrl: 'app/layout/layout.html'
  });
});
