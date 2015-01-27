'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
	.module('marcado', [
		'ngRoute',
		'loginServices',
		'components'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/marcado.html',
				controller: 'MarcadoCtrl'
			})
			.when('/test', {
				templateUrl: 'views/test.html',
				controller: 'testServiceCtrl'
			})
			.when('/racs/:codpos', {
				templateUrl: 'views/racs.html',
				controller: 'crudRacCtrl'
			})
			.when('/rac/:codpos/:userid', {
				templateUrl: 'views/rac.html'
			})
			.when('/registro/:codpos', {
				templateUrl: 'views/registro.html',
				controller: 'registroCtrl'
			})
			.when('/cambiarpass', {
				templateUrl: 'views/cambiarpass.html',
				controller: 'cambiarpassCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})
	.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]);