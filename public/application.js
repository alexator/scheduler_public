//Bootstrap Angular environment of the application
//Declare the application's name and the main module
//Declare dependencies (example module, ....)
var mainApplicationModuleName = "first_app",
mainApplicationModule         = angular.module(mainApplicationModuleName, ['ngRoute', 'users', 'example']);

mainApplicationModule.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('!');
}]);

if (window.location.hash === '#_=_') {
	window.location.hash = '#!';
}

//Bind a function (Angular) to the jquery's document ready event
angular.element(document).ready(function() {
	angular.bootstrap(document, [mainApplicationModuleName]);
});