var recipeApp = angular.module('myApp');

recipeApp.controller('RecipesController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('RecipesController loaded...');

	$scope.getRecipes = function(){
		$http.get('/api/recipes').success(function(response){
			$scope.recipes = response;
		});
	}

	$scope.getRecipe = function(){
		var id = $routeParams.id;
		$http.get('/api/recipes/'+id).success(function(response){
			$scope.recipe = response;
		});
	}

	$scope.addRecipe = function(){
		console.log($scope.recipe);
		$http.post('/api/recipes/', $scope.recipe).success(function(response){
			window.location.href='#/recipes';
		});
	}

	$scope.updateRecipe = function(){
		var id = $routeParams.id;
		$http.put('/api/recipes/'+id, $scope.recipe).success(function(response){
			window.location.href='#/recipes';
		});
	}

	$scope.removeRecipe = function(id){
		$http.delete('/api/recipes/'+id).success(function(response){
			window.location.href='#/recipes';
		});
	}
}]);