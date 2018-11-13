angular.module('ginger-router', ['ngRoute'])
			.config(function($routeProvider) {
				$routeProvider
				.when('/dashboard', {
					templateUrl: 'views/dashboard.html'
				})
				.when('/flot', {
					templateUrl: 'views/flot.html'
				})
				.when('/morris', {
					templateUrl: 'views/morris.html'
				})
				.when('/tables', {
					templateUrl: 'views/tables.html'
				})
				.when('/forms', {
					templateUrl: 'views/forms.html'
				})
				.when('/buttons', {
					templateUrl: 'views/buttons.html'
				})
				.when('/panels-wells', {
					templateUrl: 'views/panels-wells.html'
				})
				.when('/notifications', {
					templateUrl: 'views/notifications.html'
				})
				.when('/typography', {
					templateUrl: 'views/typography.html'
				})
				.when('/icons', {
					templateUrl: 'views/icons.html'
				})
				.when('/grid', {
					templateUrl: 'views/grid.html'
				})
				.when('/blank', {
					templateUrl: 'views/blank.html'
				})
				.when('/new-email', {
					templateUrl: 'views/new-email.html'
				})
				.otherwise({
					redirectTo: '/dashboard'
				});
			});