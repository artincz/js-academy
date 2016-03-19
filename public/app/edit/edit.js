var app = angular.module('sample-app');

app.config(function ($stateProvider) {
  $stateProvider.state('edit', {
    parent: 'layout',
    url: '/edit/:id',
    templateUrl: 'app/edit/edit.html',
    controller: function ($scope, $stateParams, $state, contactsService) {
      if ($stateParams.id) {
        contactsService
          .find($stateParams.id)
          .then(function (contact) {
            $scope.contact = contact;
          });
      }

      $scope.save = function () {
        if ($scope.contactForm.$valid) {
          var serviceFn = $scope.contact._id ? contactsService.update : contactsService.create;
          serviceFn($scope.contact)
            .then(function (contact) {
              $state.go('show', {id: $scope.contact._id || contact._id});
            });
        }
      };

      $scope.returnPage = function () {
        $scope.contact && $scope.contact._id ? $state.go('show', {id: $scope.contact._id}) : $state.go('home');
      }
    }
  });
});
