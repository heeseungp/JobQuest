'use strict';

var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');
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

//Displays a application given an ID. Returns the modified application.
exports.show_an_application = function(req, res) {
	var id = req.params.ApplicationtId;
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
  
exports.show_all_posts = function(req, res) {
	Post.find({}, function(err, post) {
		if (err)
			return res.send(err);
		return res.json(post);
		console.log("All posts shown");
	});
};

exports.create_a_post = function(req, res) {
	var new_post = new Post({
		title:req.body.title,
		thread:req.body.thread,
		votecount:0,
		created_at: new Date(),
		comments:[]
	});

	new_post.save(function(err, post) {
		if (err)
			return res.send(err);
		return res.send('Post successfully created');
		console.log("Post successfully created");
	});
};

exports.show_a_post = function(req, res) {
	var id = req.params.PostId;
	Post.findById(id, function(err, post) {
		if (err)
			return res.send(err);
		if(post == null)
			return res.send('Post id:'+id+' not found');
		return res.json(post);
		console.log('Returned post id:'+id);
	});
};

exports.vote_on_post = function(req, res) {
	var id = req.params.PostId;
	var type = req.params.type;
	Post.findById(id, function(err, post) {
		if(err)
			return res.send(err);
		if(post == null) 
			return res.send('Post id:'+id+' not found');
		
		if(type == "up"){
			post.votecount++;
		}
		else if(type == "down"){
			post.votecount--;
		}
		else{
			return res.send('Invalid type used:'+type);
		}

		post.save(function(err) {
			if(err)
				res.send(err);
			return res.send('Voted on post id:'+id);
			console.log('Voted on post id:'+id);
		})
	});
};

exports.add_a_comment = function(req, res) {
	var id = req.params.PostId;
	var comment = req.body.text;

	Post.findByIdAndUpdate(id,
		{$push: {"comments": {text: comment, date: new Date()}}}, 
		{safe: true, upsert: true, new: true},
		function(err, post) {
			if(err)
				console.log(err);
			return res.send('Comment added to post id:'+id);
		});
};