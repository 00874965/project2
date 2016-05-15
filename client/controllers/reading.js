var myApp = angular.module('myApp');

myApp.controller('ReadingsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('ReadingsController loaded...');

	$scope.getReadings = function(){
		$http.get('/api/readings').success(function(response){
			$scope.readings = response;
		});
	}

	$scope.getReading = function(){
		var id = $routeParams.id;
		$http.get('/api/readings/'+id).success(function(response){
			$scope.reading = response;
		});
	}

	$scope.addReading = function(){
		console.log($scope.reading);
		$http.post('/api/readings/', $scope.reading).success(function(response){
			window.location.href='#/readings';
		});
	}

	$scope.updateReading = function(){
		var id = $routeParams.id;
		$http.put('/api/readings/'+id, $scope.reading).success(function(response){
			window.location.href='#/readings';
		});
	}

	$scope.removeReading = function(id){
		$http.delete('/api/readings/'+id).success(function(response){
			window.location.href='#/readings';
		});
	}
}]);