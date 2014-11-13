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

recipeApp.controller('PlannerController', function($scope, Recipe){
  $scope.recipes = Recipe.query();

  $scope.selectRecipie = function (selectedRecipie, dayOfWeek){
    console.log(selectedRecipie);
    $scope.recipes[dayOfWeek] = selectedRecipie;
    console.log($scope.recipes);
  }

});

recipeApp.controller('ListController', function($scope, Recipe){
	$scope.recipes = Recipe.query();
});

recipeApp.controller('AddRecipeController', function($scope, Recipe){

});
