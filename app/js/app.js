'use strict';
// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]);
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/index.html', {templateUrl: 'views/main.html', controller: 'main'});
  $routeProvider.otherwise({redirectTo: '/index.html'});
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  }).hashPrefix('!');
}]).run(function($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function(ev,data) {   
	 if (data.$route && data.$route.controller)
	   $rootScope.controller = data.$route.controller;
	});
}).filter('to_trusted', ['$sce', function($sce){
    return function(text) {
        return $sce.trustAsHtml(text);
    };
}]);
