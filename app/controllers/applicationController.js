'use strict';

var mongoose = require('mongoose');
var Application = mongoose.model('Applications'); 

//Shows all applications. Returns every application in the collection.
exports.show_all_applications = function(req, res) {
 	Application.find({}, function(err, applications) {
  		if (err)
 			return res.status(500).send(err);
  		console.log("All applications shown");
 		return res.json(applications);
  	});
};

//Creates a new application providing company, role, status and comment (optional). Returns the new application.
exports.create_an_application = function(req, res) {
 //Create a new application schema.
 //Only company, role and status required
  var new_application = new Application({
  	company:req.body.company,
  	role:req.body.role,
  	status:req.body.status,
  	comment:req.body.comment
  });
  
 //Saves the new application into the Application collection
 new_application.save(function(err, application) {
  	if (err)
 		return res.status(500).send(err);
 	console.log('Application successfully created with id:'+application._id);
 	return res.json(application);
  });
};

//Displays an application given an ID. Returns the modified application.
exports.show_an_application = function(req, res) {
	var id = req.params.ApplicationId;
  	Application.findById(id, function(err, application) {
  		if (err)
 			return res.status(500).send(err);
  		
      if(application == null)
 			return res.status(404).send('Application id:'+id+' not found');
 
 		console.log('Displaying application with id:'+id)
 		return res.json(application);	
 	});
};

//Edits either an application's company, role, status or comment. Returns the modified application.
exports.edit_an_application = function(req, res) {
 	var id = req.params.ApplicationId;
 	Application.findById(id, function(err, application) {
 		if (err)
 			return res.status(500).send(err);
 		if(application == null)
 			return res.status(404).send('Application id:'+id+' not found');
 
 		//Sets a new value to company, role, status or comment ONLY if a new title/thread value is provided.
 		//Otherwise, it will retain its old value
 		application.company = req.body.company || application.company;
 		application.role = req.body.role || application.role;
 		application.status = req.body.status || application.status;
		application.comment = req.body.comment || application.comment;
 
 		application.save(function(err, application) {
 			if(err)
 				return res.status(500).send(err);
 			console.log('Application id:'+id+' successfully updated');
 			return res.json(application);
 		});
 	});
};

//Removes an application. Returns a success message.
exports.remove_an_application = function(req, res) {
	var id = req.params.ApplicationId;
	Application.findById(id, function(err, application) {
		if (err)
			return res.status(500).send(err);
		if(application == null)
			return res.status(404).send('Application id:'+id+' not found');

		application.remove();
		console.log('Application id:'+id+' successfully removed');
		return res.send('Application removed');
  });
};
