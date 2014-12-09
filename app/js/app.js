/**
* recipe Module
*
* Description
*/
recipeApp = angular.module('RecipeApp', ['recipeservices','ngRoute']);



// Define Routing for app
recipeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
      }).
      when('/recipes', {
        templateUrl: 'templates/recipes.html',
        controller: 'RecipeController'
      }).
      when('/planner', {
        templateUrl: 'templates/planner.html',
        controller: 'PlannerController'
      }).
      when('/shopping', {
        templateUrl: 'templates/list.html',
        controller: 'ListController'
      }).
      when('/addRecipe', {
        templateUrl: 'templates/addRecipe.html',
        controller: 'AddRecipeController'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);


recipeApp.controller('HomeController', function($scope, Recipe){

});

recipeApp.controller('RecipeController', function($scope, Recipe){
	$scope.recipes = Recipe.query();
});

recipeApp.controller('PlannerController', function($scope, Recipe, Week){
  
  //get ALL the recipies for the week
  $scope.weekRecipies = Week.query();

  //get individual day recipies - Probably a better way to do this but it works!
  Week.search({id: 'Monday'}, function(data){
    $scope.Monday = data.recipe.name;
  });

  Week.search({id: 'Tuesday'}, function(data){
    $scope.Tuesday = data.recipe.name;
  });

  Week.search({id: 'Wednesday'}, function(data){
    $scope.Wednesday = data.recipe.name;
  });

  Week.search({id: 'Thursday'}, function(data){
    $scope.Thursday = data.recipe.name;
  });

  Week.search({id: 'Friday'}, function(data){
    $scope.Friday = data.recipe.name;
  });

  Week.search({id: 'Saturday'}, function(data){
    $scope.Saturday = data.recipe.name;
  });

  Week.search({id: 'Sunday'}, function(data){
    $scope.Sunday = data.recipe.name;
  });

  //get all recipies in the DB
  $scope.recipes = Recipe.query();

  //When a user selects a recipie for a day run this function
  $scope.selectRecipie = function (selectedRecipie, dayOfWeek, recipeId){

    //set the recipies.dayofweek to the selected recipie
    $scope.recipes[dayOfWeek] = selectedRecipie;

    //create a new week object with $resource funcions to save the recipie
    $scope.week = new Week();

    //set the data to send to the server
    //.day is sent as post data through angular magic
    //.id is sent on the URL line don't ask how it works. its magic.
    $scope.week.day = dayOfWeek;
    $scope.week.id  = recipeId;

    $scope.week.$update({id: recipeId});

  }

});

recipeApp.controller('ListController', function($scope, Recipe){
	$scope.recipes = Recipe.query();
});

recipeApp.controller('AddRecipeController', function($scope, Recipe, $http){
	
	
	$scope.addRecipe = function (){
		var data = {
						rating: $scope.recipeRating,
						category: $scope.recipeCategory,
						name: $scope.recipeName,
						__v: 0,
						ingredients: [
							{
								amount: $scope.recipeIngredientsAmmount,
								amountType: $scope.recipeIngredientsAmmountType,
								ingredient: $scope.recipeIngredientsIngredient
							}
						],
						directions: [
							{
								step: $scope.directionsStep,
								direction: $scope.directionsDirection
							}
						]
					};
		$http.post("api/recipes", data).success(function (data, status, headers) {
			alert("Recipe added.");
			$http.get(headers("location")).success(function (data) {
				$scope.recipes.push(data);
			});
							window.location = "/#/recipes";

		});
	}
});
