var newsitemApp = angular.module('myApp');

newsitemApp.controller('NewsitemsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('NewsitemsController loaded...');

	$scope.getNewsitems = function(){
		$http.get('/api/newsitems').success(function(response){
			$scope.newsitems = response;
		});
	}

	$scope.getNewsitem = function(){
		var id = $routeParams.id;
		$http.get('/api/newsitems/'+id).success(function(response){
			$scope.newsitem = response;
		});
	}

	$scope.addNewsitem = function(){
		console.log($scope.newsitem);
		$http.post('/api/newsitems/', $scope.newsitem).success(function(response){
			window.location.href='#/newsitems';
		});
	}

	$scope.updateNewsitem = function(){
		var id = $routeParams.id;
		$http.put('/api/newsitems/'+id, $scope.newsitem).success(function(response){
			window.location.href='#/newsitems';
		});
	}

	$scope.removeNewsitem = function(id){
		$http.delete('/api/newsitems/'+id).success(function(response){
			window.location.href='#/newsitems';
		});
	}
}]);