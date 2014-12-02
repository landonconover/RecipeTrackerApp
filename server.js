// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

// connect to our database
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/recipeTracker'); 

//include the models
var Recipe     = require('./models/recipes');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serve static data from the app folder
app.use(express.static(__dirname + '/app'));

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// middleware to use for all requests
// Use this for validation and error logging
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	console.log('Here is the body:');
	console.log(req.body);
	next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// more routes for our API will happen here
router.route('/recipes')

	//******************************************************
	//POST NEW
	// create a recipe (accessed at POST http://localhost:8080/api/recipes)
	//******************************************************
	.post(function(req, res) {
		
		// create a new instance of the Recipe model
		var recipe = new Recipe(); 

		// set the Recipe name (comes from the request)
		recipe.name = req.body.name;  
		recipe.category = req.body.category;
		recipe.rating = req.body.rating; 
		recipe.directions = req.body.directions;
		recipe.ingredients = req.body.ingredients;

		// save the recipe and check for errors
		recipe.save(function(err) {
			if (err)
				res.send(err);

			res.json(recipe);
		});
	})
	//******************************************************


	//******************************************************
	//GET ALL
	//get all recipes (accessed at GET http://localhost:8080/api/recipes)
	//******************************************************
	.get(function(req, res) {
		Recipe.find(function(err, recipes) {
			if (err)
				res.send(err);

			res.json(recipes);
		});
	});
	//******************************************************


	// on routes that end in /recipes/:recipe_id
// ----------------------------------------------------
router.route('/recipes/:recipe_id')

	//******************************************************
	//GET ONE
	// get the recipe with that id (accessed at GET http://localhost:8080/api/recipes/:recipe_id)
	//******************************************************
	.get(function(req, res) {
		Recipe.findById(req.params.recipe_id, function(err, recipe) {
			if (err)
				res.send(err);
			res.json(recipe);
		});
	})
	//******************************************************

	//******************************************************
	//EDIT ONE
	// update the recipe with this id (accessed at PUT http://localhost:8080/api/recipes/:recipe_id)
	//******************************************************
	.put(function(req, res) {

		// use our recipe model to find the recipe we want
		Recipe.findById(req.params.recipe_id, function(err, recipe) {

			if (err)
				res.send(err);

			// update the recipes info
			// recipe.name = req.body.name; 
			// recipe.category = req.body.category; 
			recipe.date 	   = req.body.date;



			// console.log(req.body);

			console.log(recipe.date);
 
			// save the recipe
			recipe.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Recipe updated!' });
			});

		});
	})
	//******************************************************

	//******************************************************
	//DELETE ONE
	// delete the recipe with this id (accessed at DELETE http://localhost:8080/api/recipes/:recipe_id)
	//******************************************************
	.delete(function(req, res) {
		Recipe.remove({
			_id: req.params.recipe_id
		}, function(err, recipe) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});
	//******************************************************


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
