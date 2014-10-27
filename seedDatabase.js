// connect to our database
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/recipeTracker');

//include helper libaries
var ASQ = require("asynquence");
var _und = require("underscore");
var prompt = require('prompt');

//pull in our data model
var recipeJSON = require('./seedData.json')

//include the models
var Recipe = require('./models/recipes');

//add a blank line, cause I think it looks nice.
console.log();

//start the sequence. For more info: https://github.com/getify/asynquence
ASQ()

//Make sure the user knows whats what.
.then(function(done){


	// Setting these properties customizes the prompt.
	prompt.message = "***WARNING!***".red;

	prompt.start();

	prompt.get({
		properties: {
		    answer: {
		    description: "This will delete all database entries, and seed with defaults. ".blue+"Type YES to continue"
		    }
	    }
	}, function (err, result) {

		//if the user answers YES then go on to the next step
	    if (result.answer == "YES") {
	    	done();

	    //if not exit the program
	    } else {
	    	console.log('You choose, unwisely...'); 
	    	process.exit();
	    };
	});
})

//drop the recipie collection
.then(function(done){
	mongoose.connection.collections['recipes'].drop( function(err) {

		if (err) {
			console.log(err);
			process.exit();
		};

		console.log();
	    console.log('I sure hope you know what you are doing...');
	    console.log('The recipie collection has been dropped, and is gone FOREVER AND EVER!');
	    console.log();

	    //next step
	    done();
	});
})

//Loop through the JSON data and add it to the DB
.then(function(done){

	console.log("Adding default recipies.");

	//loop through all the JSON
	_und.each(recipeJSON, function(recipe){
		console.log(recipe.name + ' Added!');
		var newRecipe = new Recipe(); 

		//set the newRecipe with the values from the JSON
		newRecipe.name = recipe.name;  
		newRecipe.category = recipe.category;
		newRecipe.rating = recipe.rating; 
		newRecipe.directions = recipe.directions;
		newRecipe.ingredients = recipe.ingredients;

		// save the recipe and check for errors
		newRecipe.save(function(err) {
			if (err) {
				console.log(err);
				process.exit();
			};

			console.log();
			console.log("--------------------------------------");
			console.log('The Database has been reset. Have fun!');
			console.log("--------------------------------------");
			console.log();

			//Get us out of here
    		process.exit();
		});
	})


})

