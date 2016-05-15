var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'',
		templateUrl: 'views/home.html'
	})
		.when('/about', {
			templateUrl: 'views/about.html'
	})
	
				
	// Recipes routing
	.when('/recipes', {
		controller:'RecipesController',
		templateUrl: 'views/recipes.html'
	})
	.when('/recipes/details/:id',{
		controller:'RecipesController',
		templateUrl: 'views/recipe_details.html'
	})
	.when('/recipes/add',{
		controller:'RecipesController',
		templateUrl: 'views/add_recipe.html'
	})
	.when('/recipes/edit/:id',{
		controller:'RecipesController',
		templateUrl: 'views/edit_recipe.html'
	})

	// Patients routing
		.when('/patients', {
		controller:'PatientsController',
		templateUrl: 'views/patients.html'
	})
	.when('/patients/details/:id',{
		controller:'PatientsController',
		templateUrl: 'views/patient_details.html'
	})
	.when('/patients/add',{
		controller:'PatientsController',
		templateUrl: 'views/add_patient.html'
	})
	.when('/patients/edit/:id',{
		controller:'PatientsController',
		templateUrl: 'views/edit_patient.html'
	})
	

	// Readings routing
	.when('/readings', {
		controller:'ReadingsController',
		templateUrl: 'views/readings.html'
	})
	.when('/readings/details/:id',{
		controller:'ReadingsController',
		templateUrl: 'views/reading_details.html'
	})
	.when('/readings/add',{
		controller:'ReadingsController',
		templateUrl: 'views/add_reading.html'
	})
	.when('/readings/edit/:id',{
		controller:'ReadingsController',
		templateUrl: 'views/edit_reading.html'
	})

	// NewsRoom routing
	
	.when('/newsitems', {
		controller:'NewsitemsController',
		templateUrl: 'views/newsitems.html'
	})
	.when('/newsitems/details/:id',{
		controller:'NewsitemsController',
		templateUrl: 'views/newsitem_details.html'
	})
	.when('/newsitems/add',{
		controller:'NewsitemsController',
		templateUrl: 'views/add_newsitem.html'
	})
	.when('/newsitems/edit/:id',{
		controller:'NewsitemsController',
		templateUrl: 'views/edit_newsitem.html'
	})
	
	.otherwise({
		redirectTo: '/'
	});
});