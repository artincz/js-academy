var app = angular.module('sample-app');

app.directive('jsaField', [function () {
  return {
    restrict: 'E',
    transclude: true,
    require: '^?form',
    scope: {
      label: '@'
    },
    link: function ($scope, $element, $attrs, formCtrl) {
      if (!$scope.control) {
        var control = $element.find('input, textarea, select');
        var ngModel = control.controller('ngModel');
        if (!ngModel) {
          return;
        }

        $scope.ngModel = ngModel;
        $scope.modelErrors = ngModel.$error;

        $scope.showErrors = function () {
          return ngModel.$invalid && ((formCtrl && formCtrl.$submitted) || ngModel.$dirty);
        };

        $scope.control = control[0];
      }
    },
    templateUrl: 'app/directive/jsa-field.html'
  };
}])
;
