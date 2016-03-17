var app = angular.module('sample-app');

// a very artificial example of a custom validator directive
app.directive('jsaAddress', function() {
	return {
		restrict: 'A',
		require: 'ngModel',
		link: function(scope, element, attrs, controller) {
			controller.$validators.jsaAddress = function(modelValue, viewValue) {
				if (!modelValue) {
					return true;
				}
				return modelValue.split('\n').length === 3;
			};
		}
	};
});