var RecipeTrackerServices = angular.module('recipeservices', ['ngResource']);

RecipeTrackerServices.factory('Recipe', function($resource){
	return $resource('/api/recipes/:id');
})

RecipeTrackerServices.factory('Week', function($resource){
	  return $resource('/api/week/:id', { id: '@_id' }, {
	    update: {
	      method: 'PUT' // this method issues a PUT request
	    },
	    search:{
	    	method: 'GET',
	    	id: '@_id'
	    }
	  });
	});