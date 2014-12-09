var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var weekPlanSchema   = new Schema({
	day: {type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
	recipe: { type: String, ref: 'Recipe'}
});

module.exports = mongoose.model('weekPlan', weekPlanSchema);