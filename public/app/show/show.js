angular.module('contacts-app').config(function($stateProvider) {
  $stateProvider.state('show', {
      parent: 'layout',
      url: '/show/:id',
      templateUrl: 'app/show/show.html',
      controller: function($scope, $stateParams, contactService){
        $scope.contact = contactService.find($stateParams.id);
      }
    })
});
