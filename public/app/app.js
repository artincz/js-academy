var app = angular.module('sample-app', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

app.controller('SampleAppController', function($scope){
  $scope.appName = 'SampleApp';
});
