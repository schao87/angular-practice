var storeApp = angular.module('storeApp', ['ngRoute']);


storeApp.config(function($routeProvider){
	$routeProvider
		.when('/index', {
			templateUrl: 'apple.html',
			controller: 'appleController',
			controllerAs: 'appleCont'
		})
		.when('/book', {
			templateUrl: 'book.html',
			controller: 'bookController',
			controllerAs: 'bookCont'
		})
		.when('/car', {
			templateUrl: 'car.html',
			controller: 'carController',
			controllerAs: 'carCont'
		});

});


	

storeApp.controller('appleController',['$scope', function($scope){
		$scope.items= [
			{	'name': 'apple',
				'color': 'red',
				'price': '$1'
			}
		]	

}]);
storeApp.controller('bookController', ['$scope', function($scope){
		// $scope.items= [
		// 	{	name: 'book',
		// 		color: 'green',
		// 		price: '$5'
		// 	}
		// ]
		$scope.name = 'book';

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

