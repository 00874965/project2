var mongoose = require('mongoose');

// Recipe Schema
var readingSchema = mongoose.Schema({
	 reading_day:{type: String },
	 reading_no:{type: String },
	 readings_no:{type: String},
	 patient_no:{type: String},
	 reading_date:{type: String },
	 reading_time:{type: String },
	 reading_meal:{type: String },
	 reading_level:{type: String },
	 create_date:{ type: Date, default: Date.now }
});

var Reading = module.exports = mongoose.model('Reading', readingSchema);

// Get Readings
module.exports.getReadings = function(callback, limit){
	Reading.find(callback).limit(limit);
}

// Get Reading
module.exports.getReadingById = function(id, callback){
	Reading.findById(id, callback);
}

// Add Reading
module.exports.addReading = function(reading, callback){
	Reading.create(reading, callback);
}

// Update Reading
module.exports.updateReading = function(id, reading, options, callback){
	var query = {_id: id};
	var update = {
	 	readings_no: reading.readings_no,
  		reading_no: reading.reading_no,
   		patient_no: reading.patient_no,
    	reading_date: reading.reading_date,
  		reading_day: reading.reading_day,
   		reading_time: reading.reading_time,
    	reading_meal: reading.reading_meal,
   		reading_level: reading.reading_level,
	 	create_date: reading.create_date
	}
	Reading.findOneAndUpdate(query, update, options, callback);
}

// Delete Reading
module.exports.removeReading = function(id, callback){
	var query = {_id: id};
	Reading.remove(query, callback);
}