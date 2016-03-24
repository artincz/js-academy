var app = angular.module('sample-app');

app.factory('userService', function($http) {
  return {
    user: null,

    init: function(){
      var service = this;

      return $http.get('/api/user').then(function(res){
        service.user = res.data;
      });
    },

    login: function(credentials){
      return $http.post('/api/login', credentials).then(function(res){
        return res.data;
      });
    },

    logout: function(){
      return $http.post('/api/logout').then(function(res){
        return res.data;
      });
    }
  };
});
