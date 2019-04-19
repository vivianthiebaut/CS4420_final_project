angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/nerds', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/rle', {
			templateUrl: 'views/RLE.html',
			controller: 'RLEController'
		})

		.when('/delta', {
			templateUrl: 'views/delta.html',
			controller: 'DeltaController'
		})

		.when('/bitmap', {
			templateUrl: 'views/bitmap.html',
			controller: 'BitmapController'
		})

		.when('/geeks', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		});

	$locationProvider.html5Mode(true);

}]);
