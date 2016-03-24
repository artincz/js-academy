var app = angular.module('sample-app');

app.config(function($stateProvider) {
  $stateProvider.state('layout', {
    abstract: true,
    templateUrl: 'app/layout/layout.html',
    resolve: {
      initUserService: function(userService, $state){
        return userService.init().catch(function(){
          return $state.go('login', {path: location.hash});
        });
      }
    },

    controller: function($scope, userService, $state){
      $scope.user = userService.user;

      $scope.signOut = function(){
        userService.logout().then(function(){
          $state.go('login');
        });
      };
    }
  });
});
