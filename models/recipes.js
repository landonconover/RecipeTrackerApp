var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DirectionsSchema = new Schema({
	step: Number,
	direction: String
});

var IngredientSchema = new Schema({
	amount: Number,
	amountType: String,
	ingredient: String
});

var RecipeSchema   = new Schema({
	name: String,
	category: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Desserts']},
	rating: { type: Number, min: 0, max: 5 },
	directions: [DirectionsSchema],
	ingredients: [IngredientSchema]
});

module.exports = mongoose.model('Recipe', RecipeSchema);