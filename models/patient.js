var mongoose = require('mongoose');

// Patient Schema
var patientSchema = mongoose.Schema({
	patient_no:{
		type: String,
		required: true
	},
	patient_fname:{
		type: String,
		required: true
	},
	patient_lname:{
		type: String,
		required: true
	},
	patient_address:{
		type: String
	},
	patient_age:{
		type: String
	},
	patient_duedate:{
		type: String
	},
	patient_pregnancy_no:{
	type: Number
	},
	readings_no:{
		type: String
	},
	
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Patient = module.exports = mongoose.model('Patient', patientSchema);

// Get Patients
module.exports.getPatients = function(callback, limit){
	Patient.find(callback).limit(limit);
}

// Get Patient
module.exports.getPatientById = function(id, callback){
	Patient.findById(id, callback);
}

// Add Patient
module.exports.addPatient = function(patient, callback){
	Patient.create(patient, callback);
}

// Update Patient
module.exports.updatePatient = function(id, patient, options, callback){
	var query = {_id: id};
	var update = {
	patient_no: patient.patient_no,
    patient_fname: patient.patient_fname,
    patient_lname: patient.patient_lname,
    patient_address: patient.patient_address,
    patient_age: patient.patient_age,
    patient_duedate: patient.patient_duedate,
    patient_pregnancy_no: patient.patient_pregnancy_no,
    readings_no: patient.readings_no,
	create_date: patient.create_date
	}
	Patient.findOneAndUpdate(query, update, options, callback);
}

// Delete Patient
module.exports.removePatient = function(id, callback){
	var query = {_id: id};
	Patient.remove(query, callback);
}