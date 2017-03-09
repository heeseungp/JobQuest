'use strict';

var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');

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
		author:req.body.author,
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
			post.votes++;
		}
		else if(type == "down"){
			post.votes--;
		}
		else{
			return res.send('Invalid type used:'+type);
		}

		post.save(function(err) {
			if(err)
				return res.send(err);
			return res.send('Voted on post id:'+id);
			console.log('Voted on post id:'+id);
		});
	});
};

exports.add_a_comment = function(req, res) {
	var id = req.params.PostId;
	var comment = req.body.text;
	// If there is no comment provided, return
	if(!comment)
		return res.send('No comment provided');

	Post.findById(id, function(err, post) {
			if(err)
				return res.send(err);
			post.comments.push(new Comment({text:comment}));
			post.save(function(err) {
				if(err)
					return res.send(err);
				return res.send('Comment added to post id:'+id);
				console.log('Comment added to post id:'+id);
			});
		});
};