var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('login', {
    url: '/login?path',
    templateUrl: 'app/login/login.html',
    controller: function($scope, $stateParams, userService){
      $scope.credentials = {};

      $scope.signIn = function(){
        userService.login($scope.credentials).then(function(){
          location.hash = $stateParams.path;
        });
      };
    }
  });
});
