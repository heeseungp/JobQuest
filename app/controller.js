'use strict';

//Requires mongoose and our schemas (stored in models.jsa)
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');

//Shows all posts. Returns every post in the collection.
exports.show_all_posts = function(req, res) {
	Post.find({}, function(err, posts) {
		if (err)
			return res.status(500).send(err);
		console.log("All posts shown");
		return res.json(posts);
	});
};

//Creates a post given a title, thread, and author (optional). Returns the new post.
exports.create_a_post = function(req, res) {
	//Create a new post schema instance with a title, thread, and author.
	//Only the title and thread is required; author defaults to "Anonymous" if none is provided.
	var new_post = new Post({
		title:req.body.title,
		thread:req.body.thread,
		author:req.body.author,
		comments:[]
	});

	//Saves the new post into the Post collection
	new_post.save(function(err, post) {
		if (err)
			return res.status(500).send(err);
		console.log('Post successfully created with id:'+post._id);
		return res.json(post);
	});
};

//Displays a post given an ID. Returns the modified post.
exports.show_a_post = function(req, res) {
	var id = req.params.PostId;
	Post.findById(id, function(err, post) {
		if (err)
			return res.status(500).send(err);
		if(post == null)
			return res.status(404).send('Post id:'+id+' not found');

		console.log('Displaying post with id:'+id)
		return res.json(post);	
	});
};

//Edits either a post's title, thread, or both. Returns the modified post.
exports.edit_a_post = function(req, res) {
	var id = req.params.PostId;
	Post.findById(id, function(err, post) {
		if (err)
			return res.status(500).send(err);
		if(post == null)
			return res.status(404).send('Post id:'+id+' not found');

		//Sets a new value to the title/thread ONLY if a new title/thread value is provided.
		//Otherwise, it will retain its old value
		post.title = req.body.title || post.title;
		post.thread = req.body.thread || post.thread;

		post.save(function(err, post) {
			if(err)
				return res.status(500).send(err);
			console.log('Post id:'+id+' successfully updated');
			return res.json(post);
		});
	});
};

//Removes a post. Returns a success message.
exports.remove_a_post = function(req, res) {
	var id = req.params.PostId;
	Post.findById(id, function(err, post) {
		if (err)
			return res.status(500).send(err);
		if(post == null)
			return res.status(404).send('Post id:'+id+' not found');

		post.remove();
		console.log('Post id:'+id+' successfully removed');
		return res.send('Post removed');
	});
};

//Votes a post up/down depending on the :type query parameter. Returns the modified post.
exports.vote_on_post = function(req, res) {
	var id = req.params.PostId;
	var type = req.params.typeId;
	Post.findById(id, function(err, post) {
		if(err)
			return res.status(500).send(err);
		if(post == null) 
			return res.status(404).send('Post id:'+id+' not found');
		
		if(type == "up"){	//Increment votes
			post.votes++;
		}
		else if(type == "down"){	//Decrement votes
			post.votes--;
		}
		else{
			return res.status(404).send('Type'+type+' not found:');
		}

		post.save(function(err, post) {
			if(err)
				return res.status(500).send(err);
			console.log('Voted on post id:'+id);
			return res.json(post)
		});
	});
};

//Adds a comment to a post. Takes the id of the post and the comment text. Returns the modified post.
exports.add_a_comment = function(req, res) {
	var id = req.params.PostId;
	var comment = req.body.text;
	// If there is no comment provided, return
	if(!comment)
		return res.send('No comment provided');

	Post.findByIdAndUpdate(id, {$push: {"comments": new Comment({text:comment})}}, {"new": true, "upsert": true, "safe": true}, function (err, post) {
			if (err) 
				return res.status(500).send(err);
			console.log('Comment successfully inserted to post id:'+id);
			return res.json(post);	
	});
};

//Edits a comment. Takes a postid and commentid as well as the comment text. Returns a success message.
exports.edit_a_comment = function(req, res) {
	var postid = req.params.PostId;
	var commentid = req.params.CommentId;
	var comment = req.body.text;

	// If there is no comment provided, return
	if(!comment)
		return res.send('No new comment text provided');
	
	Post.findOneAndUpdate({_id: postid, 'comments._id': commentid}, {$set: {'comments.$.text': comment}}, function(err, numAffected) {
		if (err) 
			return res.status(500).send(err);
		if (numAffected.n == 0)
			return res.status(404).send('No comment with post id:'+postid+' and comment id:'+commentid+' found');
		console.log('Post id:'+postid+' comment id:'+commentid+' successfully updated');
		return res.send('Post id:'+postid+' comment id:'+commentid+' successfully updated');
	});
};

//Removes a comment. Takes the postid and commentid. Returns a success message.
exports.remove_a_comment = function(req, res) {
	var postid = req.params.PostId;
	var commentid = req.params.CommentId;

	Post.findOneAndUpdate({_id: postid}, {$pull: {comments: {_id: commentid}}}, {"new": true}, function(err, numRemoved) {
		if (err) 
			return res.status(500).send(err);
		if (numRemoved.n == 0)
			return res.status(404).send('No comment with post id:'+postid+' and comment id:'+commentid+' found');
		console.log('Post id:'+postid+' comment id:'+commentid+' successfully removed');
		return res.send('Post id:'+postid+' comment id:'+commentid+' successfully removed');
	});
};

<<<<<<< HEAD
=======
>>>>>>> master



