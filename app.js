var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

//Require applicable controllers
Reading =require('./models/reading');
Patient =require('./models/patient');
Recipe =require('./models/recipe');
Newsitem =require('./models/newsitem');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/gd');
var db = mongoose.connection;

app.get('/', function(req, res){
	res.send('Please use /api/recipes');
});

//----------------------RECIPES ------------------------//
//gets all recipes
app.get('/api/recipes', function(req, res){
	Recipe.getRecipes(function(err, recipes){
		if(err){
			throw err;
		}
		res.json(recipes);
	});
});

//gets one recipe by id
app.get('/api/recipes/:_id', function(req, res){
	Recipe.getRecipeById(req.params._id, function(err, recipe){
		if(err){
			throw err;
		}
		res.json(recipe);
	});
});

//add recipe .. using rest client first
app.post('/api/recipes', function(req, res){
	var recipe = req.body;
	Recipe.addRecipe(recipe, function(err, recipe){
		if(err){
			throw err;
		}
		res.json(recipe);
	});
});

//update recipe mongoose function findoneandupdate
app.put('/api/recipes/:_id', function(req, res){
	var id = req.params._id;
	var recipe = req.body;
	Recipe.updateRecipe(id, recipe, {}, function(err, recipe){
		if(err){
			throw err;
		}
		res.json(recipe);
	});
});

//remove recipe 
app.delete('/api/recipes/:_id', function(req, res){
	var id = req.params._id;
	Recipe.removeRecipe(id, function(err, recipe){
		if(err){
			throw err;
		}
		res.json(recipe);
	});
});

//----------------------PATIENTS ------------------------//
//gets all patients
app.get('/api/patients', function(req, res){
	Patient.getPatients(function(err, patients){
		if(err){
			throw err;
		}
		res.json(patients);
	});
});

//gets one patient by id
app.get('/api/patients/:_id', function(req, res){
	Patient.getPatientById(req.params._id, function(err, patient){
		if(err){
			throw err;
		}
		res.json(patient);
	});
});

//add patient .. using rest client first
app.post('/api/patients', function(req, res){
	var patient = req.body;
	Patient.addPatient(patient, function(err, patient){
		if(err){
			throw err;
		}
		res.json(patient);
	});
});

//update patient mongoose function findoneandupdate
app.put('/api/patients/:_id', function(req, res){
	var id = req.params._id;
	var patient = req.body;
	Patient.updatePatient(id, patient, {}, function(err, patient){
		if(err){
			throw err;
		}
		res.json(patient);
	});
});

//remove patient 
app.delete('/api/patients/:_id', function(req, res){
	var id = req.params._id;
	Patient.removePatient(id, function(err, patient){
		if(err){
			throw err;
		}
		res.json(patient);
	});
});

//----------------------READINGS ------------------------//
//gets all readings
app.get('/api/readings', function(req, res){
	Reading.getReadings(function(err, readings){
		if(err){
			throw err;
		}
		res.json(readings);
	});
});

//gets one reading by id
app.get('/api/readings/:_id', function(req, res){
	Reading.getReadingById(req.params._id, function(err, reading){
		if(err){
			throw err;
		}
		res.json(reading);
	});
});

//add reading .. using rest client first
app.post('/api/readings', function(req, res){
	var reading = req.body;
	Reading.addReading(reading, function(err, reading){
		if(err){
			throw err;
		}
		res.json(reading);
	});
});

//update readings mongoose function findoneandupdate
app.put('/api/readings/:_id', function(req, res){
	var id = req.params._id;
	var reading = req.body;
	Reading.updateReading(id, reading, {}, function(err, reading){
		if(err){
			throw err;
		}
		res.json(reading);
	});
});

//remove reading 
app.delete('/api/readings/:_id', function(req, res){
	var id = req.params._id;
	Reading.removeReading(id, function(err, reading){
		if(err){
			throw err;
		}
		res.json(reading);
	});
});

//----------------------NEWS ------------------------//
//gets all newsitemss

app.get('/api/newsitems', function(req, res){
	Newsitem.getNewsitems(function(err, newsitems){
		if(err){
			throw err;
		}
		res.json(newsitems);
	});
});

//gets one newsitem by id
app.get('/api/newsitems/:_id', function(req, res){
	Newsitem.getNewsitemById(req.params._id, function(err, newsitem){
		if(err){
			throw err;
		}
		res.json(newsitem);
	});
});

//add newsitem .. using rest client first
app.post('/api/newsitems', function(req, res){
	var newsitem = req.body;
	Newsitem.addNewsitem(newsitem, function(err, newsitem){
		if(err){
			throw err;
		}
		res.json(newsitem);
	});
});

//update newsitems mongoose function findoneandupdate
app.put('/api/newsitems/:_id', function(req, res){
	var id = req.params._id;
	var newsitem = req.body;
	Newsitem.updateNewsitem(id, newsitem, {}, function(err, newsitem){
		if(err){
			throw err;
		}
		res.json(newsitem);
	});
});

//remove newsitem 
app.delete('/api/newsitems/:_id', function(req, res){
	var id = req.params._id;
	Newsitem.removeNewsitem(id, function(err, newsitem){
		if(err){
			throw err;
		}
		res.json(newsitem);
	});
});
//port information node app
app.listen(3000);
console.log('Running on port 3000...');