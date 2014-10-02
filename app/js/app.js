/**
* recipe Module
*
* Description
*/
angular.module('RecipeApp', ['recipeservices']).

controller('RecipeController', function($scope, Recipe){
	this.recipes = Recipe.query();
})

