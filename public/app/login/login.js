var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'app/login/login.html'
  });
});
