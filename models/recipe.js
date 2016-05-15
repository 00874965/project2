var mongoose = require('mongoose');

// Recipe Schema
var recipeSchema = mongoose.Schema({
	 name:{type: String },
	 description:{type: String },
	 mainingrediant:{type: String},
	 otheringrediant:{type: String},
	 preptime:{type: String},
	 method:{type: String},
	 avg_blood_sugar_level:{type: String},
	 image:{type: String},
	 recipe_create_date:{ type: Date, default: Date.now }
});

var Recipe = module.exports = mongoose.model('Recipe', recipeSchema);

// Get Recipes
module.exports.getRecipes = function(callback, limit){
	Recipe.find(callback).limit(limit);
}

// Get Recipe
module.exports.getRecipeById = function(id, callback){
	Recipe.findById(id, callback);
}

// Add Recipe
module.exports.addRecipe = function(recipe, callback){
	Recipe.create(recipe, callback);
}

// Update Recipe
module.exports.updateRecipe = function(id, recipe, options, callback){
	var query = {_id: id};
	var update = {
	 	name: recipe.name,
  		description: recipe.description,
   		mainingrediant: recipe.mainingrediant,
    	otheringrediant: recipe.otheringrediant,
    	preptime: recipe.preptime,
    	method: recipe.method,
    	avg_blood_sugar_level: recipe.avg_blood_sugar_level,
    	image: recipe.image,
  		recipe_create_date: recipe.recipe_create_date
   	}
	Recipe.findOneAndUpdate(query, update, options, callback);
}

// Delete Recipe
module.exports.removeRecipe = function(id, callback){
	var query = {_id: id};
	Recipe.remove(query, callback);
}