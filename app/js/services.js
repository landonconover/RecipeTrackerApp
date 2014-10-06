var RecipeTrackerServices = angular.module('recipeservices', ['ngResource']);

RecipeTrackerServices.factory('Recipe', function($resource){
	return $resource('/api/recipes/:id');
})