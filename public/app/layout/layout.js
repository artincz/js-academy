var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('layout', {
    abstract: true,
    templateUrl: 'app/layout/layout.html'
  });
});
