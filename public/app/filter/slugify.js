var app = angular.module('sample-app');

app.filter('slugify', [function () {
  return function (value) {
    if (typeof value == 'string' || value instanceof String) {
      return value.toLowerCase().replace(' ', '-');
    }
    else {
      return '';
    }
  };
}]);
