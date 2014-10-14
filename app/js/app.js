/**
* recipe Module
*
* Description
*/
angular.module('RecipeApp', ['recipeservices']).

controller('RecipeController', function($scope, Recipe){
	$scope.recipes = Recipe.query();
})

