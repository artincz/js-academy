var app = angular.module('sample-app', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $httpProvider.interceptors.push(function($q){
    return {
      responseError: function(rejection){
        if (rejection.status === 401){
          if (rejection.config.url === '/api/user'){
            return $q.reject();
          }

          //location.reload();
        }
      }
    };
  });
});

app.controller('SampleAppController', function($scope){
  $scope.appName = 'SampleApp';
});
