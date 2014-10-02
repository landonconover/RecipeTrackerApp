var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var RecipeSchema   = new Schema({
	name: String,
	category: {type: String, enum: ['Breakfast', 'Lunch', 'Dinner', 'Desserts']}

});

module.exports = mongoose.model('Recipe', RecipeSchema);