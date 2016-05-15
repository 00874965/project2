var mongoose = require('mongoose');

// Newsitem Schema
var newsitemSchema = mongoose.Schema({
	 newsitemTitle:{type: String },
	 newsitemDescription:{type: String },
	 newsitemURL:{type: String},
	 newsitemAuthor:{type: String},
	 create_date:{ type: Date, default: Date.now }
});

var Newsitem = module.exports = mongoose.model('Newsitem', newsitemSchema);

// Get Newsitems
module.exports.getNewsitems = function(callback, limit){
	Newsitem.find(callback).limit(limit);
}

// Get Newsitem
module.exports.getNewsitemById = function(id, callback){
	Newsitem.findById(id, callback);
}

// Add Newsitem
module.exports.addNewsitem = function(newsitem, callback){
	Newsitem.create(newsitem, callback);
}

// Update Newsitem
module.exports.updateNewsitem = function(id, newsitem, options, callback){
	var query = {_id: id};
	var update = {
	 	newsitemTitle: newsitem.newsitemTitle,
  		newsitemDescription: newsitem.newsitemDescription,
   		newsitemURL: newsitem.newsitemURL,
    	newsitemAuthor: newsitem.newsitemAuthor,
	 	create_date: newsitem.create_date
	}
	Newsitem.findOneAndUpdate(query, update, options, callback);
}

// Delete Newsitem
module.exports.removeNewsitem = function(id, callback){
	var query = {_id: id};
	Newsitem.remove(query, callback);
}