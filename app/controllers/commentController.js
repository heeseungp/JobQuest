'use strict';

//Requires mongoose and our schemas
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');

//Adds a comment to a post. Takes the id of the post and the comment text. Returns the modified post.
exports.add_a_comment = function(req, res) {

	if(!req.isValidUser){
		console.log('Request not completed due to lack of authentication');
		return res.status(401).json({error:'User must be logged in to access this function'});
	}

	var postid = req.params.PostId;
	var comment = req.body.text;
	var errors = {};

	//Error checking on all required parameters
	if(!postid)
		errors.postid = 'No post ID parameter provided (check URL)';
	if(!comment)
		errors.text = 'No text parameter provided (check body)';

	//Returns all errors
	if(Object.keys(errors).length > 0)
		return res.status(400).json(errors);

	Post.findOne({_id:postid}, function(err, post) {
		if(err)
			return res.status(500).send(err);
		if(post == null){
			errors.postid = 'Post id:'+postid+' not found';
			return res.status(404).json(errors);
		}

		post.comments.push(new Comment({text:comment, author:req.user.name, authorID:req.user._id}));

		post.save(function(err, post) {
			if(err)
				return res.status(500).send(err);
			console.log('Comment successfully inserted to post id:'+postid);
			return res.json(post);
		});
	});
};

//Edits a comment. Takes a postid and commentid as well as the comment text.
exports.edit_a_comment = function(req, res) {

	if(!req.isValidUser){
		console.log('Request not completed due to lack of authentication');
		return res.status(401).json({error:'User must be logged in to access this function'});
	}

	var postid = req.params.PostId;
	var commentid = req.params.CommentId;
	var comment = req.body.text;
	var errors = {};

	if(!comment)
		errors.comment = 'No comment parameter provided (check body)';
	if(!commentid)
		errors.commentid = 'No comment ID parameter provided (check URL)';
	if(!postid)
		errors.postid = 'No post ID parameter provided (check URL)';

	if(Object.keys(errors).length > 0)
		return res.status(400).json(errors);

	Post.findOne({_id: postid}, function(err, post) {
		if(err)
			return res.status(500).send(err);
		if(post == null){
			errors.postid = 'Post id:'+postid+' not found';
			return res.status(404).json(errors);
		}

		var foundComment = false;
		for(var i = 0; i < post.comments.length; i++) {
			if(commentid == post.comments[i]._id){
				foundComment = true;
				//If the user requests a comment which he/she did not create
				if(req.user._id != post.comments[i].authorID){
					errors.userid = 'User does not have permission to modify comment with id:'+commentid;
					return res.status(401).json(errors);
				}
				post.comments[i].text = comment;
				break;
			}
		}
		if(!foundComment){
			errors.commentid = 'Comment id:'+commentid+' not found';
			return res.status(404).json(errors);
		}

		post.save(function(err, post) {
			if(err)
				return res.status(500).send(err);
			console.log('Comment successfully updated');
			return res.json(post);
		});
	});
};

//Removes a comment. Takes the postid and commentid.
exports.remove_a_comment = function(req, res) {

	if(!req.isValidUser){
		console.log('Request not completed due to lack of authentication');
		return res.status(401).json({error:'User must be logged in to access this function'});
	}

	var postid = req.params.PostId;
	var commentid = req.params.CommentId;
	var errors = {};

	if(!postid)
		errors.postid = 'No post ID parameter provided (check URL)';
	if(!commentid)
		errors.commentid = 'No comment ID parameter provided (check URL)';

	if(Object.keys(errors).length > 0)
		return res.status(400).json(errors);

	Post.findOne({_id: postid}, function(err, post) {
		if(err)
			return res.status(500).send(err);
		if(post == null){
			errors.postid = 'Post id:'+postid+' not found';
			return res.status(404).json(errors);
		}

		var foundComment = false;
		for(var i = 0; i < post.comments.length; i++) {
			if(commentid == post.comments[i]._id){
				foundComment = true;
				//If the user requests a comment which he/she did not create
				if(req.user._id != post.comments[i].authorID){
					errors.userid = 'User does not have permission to modify comment with id:'+commentid;
					return res.status(401).json(errors);
				}
				//Removes 1 element from array with index at i, returns modified array
				post.comments.splice(i, 1);
				break;
			}
		}
		if(!foundComment){
			errors.commentid = 'Comment id:'+commentid+' not found';
			return res.status(404).json(errors);
		}

		post.save(function(err, post) {
			if(err)
				return res.status(500).send(err);
			console.log('Comment successfully updated');
			return res.json(post);
		});
	});
};




