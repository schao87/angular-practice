var storeApp = angular.module('storeApp', ['ngRoute']);


storeApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/index', {
			templateUrl: 'apple.html',
			controller: 'appleController'
		})
		.when('/book', {
			templateUrl: 'book.html',
			controller: 'bookController'
		})
		.when('/car', {
			templateUrl: 'car.html',
			controller: 'carController'
		});

}]);


	

storeApp.controller('appleController',['$scope', function($scope){
		$scope.items= [
			{	'name': 'apple',
				'color': 'red',
				'price': '$1'
			}
		]	

}]);
storeApp.controller('bookController', ['$scope', function($scope){
		$scope.items= [
			{	'name': 'book',
				'color': 'green',
				'price': '$5'
			}
		]
}]);
storeApp.controller('carController', ['$scope', function($scope){
		$scope.items= [
			{
				'name': 'car',
				'color': 'blue',
				'price': '$5000'
			}
		]
}]);

