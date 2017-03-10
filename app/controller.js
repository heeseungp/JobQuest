'use strict';

//Requires mongoose and our schemas (stored in models.jsa)
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');
var Comment = mongoose.model('Comments');

//Shows all posts. Returns every post in the collection.
exports.show_all_posts = function(req, res) {
	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
		if (err)
			return res.status(500).send(err);

		return res.json(posts);
	});
};

//Creates a post given a title, thread, and author (optional). Returns a success message.
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

		return res.send('Post successfully created');
	});
};

//Displays a post given an ID. Returns the post in JSON format.
exports.show_a_post = function(req, res) {
	var id = req.params.PostId;
	//Sorts all of the posts based on their creation date (oldest to newest), then uses
	//the value of id to index the resulting Post array (e.g. id=2 would get the third-oldest post, id=0 would get the oldest, etc.)
	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
		if (err)
			return res.status(500).send(err);
		if(posts[id] == null)
			return res.status(404).send('Post id:'+id+' not found');

		return res.json(posts[id]);
	});
};

//Edits either a post's title, thread, or both. Returns a success message.
exports.edit_a_post = function(req, res) {
	var id = req.params.PostId;
	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
		if (err)
			return res.status(500).send(err);
		if(posts[id] == null)
			return res.status(404).send('Post id:'+id+' not found');

		//Sets a new value to the title/thread ONLY if a new title/thread value is provided.
		//Otherwise, it will retain its old value
		posts[id].title = req.body.title || posts[id].title;
		posts[id].thread = req.body.thread || posts[id].thread;

		posts[id].save(function(err) {
			if(err)
				return res.status(500).send(err);
			return res.send('Post id:'+id+' successfully updated');
		});
	});
};

//Removes a post. Returns a success message.
exports.remove_a_post = function(req, res) {
	var id = req.params.PostId;
	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
		if (err)
			return res.status(500).send(err);
		if(posts[id] == null)
			return res.status(404).send('Post id:'+id+' not found');

		posts[id].remove();
		return res.send('Post id:'+id+' successfully removed');
	});
};

//Votes a post up/down depending on the :type query parameter. Returns a success message.
exports.vote_on_post = function(req, res) {
	var id = req.params.PostId;
	var type = req.params.typeId;
	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
		if(err)
			return res.status(500).send(err);
		if(posts[id] == null) 
			return res.status(404).send('Post id:'+id+' not found');
		
		if(type == "up"){	//Increment votes
			posts[id].votes++;
		}
		else if(type == "down"){	//Decrement votes
			posts[id].votes--;
		}
		else{
			return res.status(404).send('Type'+type+' not found:');
		}

		posts[id].save(function(err) {
			if(err)
				return res.status(500).send(err);
			return res.send('Voted on post id:'+id);
		});
	});
};

//Adds a comment to a post. Takes the id of the post and the comment text. Returns a success message.
exports.add_a_comment = function(req, res) {
	var id = req.params.PostId;
	var comment = req.body.text;
	// If there is no comment provided, return
	if(!comment)
		return res.send('No comment provided');

	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
			if(err)
				return res.status(500).send(err);
			if(posts[id] == null) 
				return res.status(404).send('Post id:'+id+' not found');

			//Push the new comment into the comment array by creating a new comment schema instance.
			posts[id].comments.push(new Comment({text:comment}));
			posts[id].save(function(err) {
				if(err)
					return res.status(500).send(err);
				return res.send('Comment added to post id:'+id);
			});
		});
};

//Edits a comment. Takes a postid and commentid, which is the index of the post/comment 
//sorted from oldest to newest, as well as the comment text. Returns a success message.
exports.edit_a_comment = function(req, res) {
	var postid = req.params.PostId;
	var commentid = req.params.CommentId;
	var comment = req.body.text;
	// If there is no comment provided, return
	if(!comment)
		return res.send('No comment provided');
	
	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
		if (err)
			return res.status(500).send(err);
		if(posts[postid] == null)
			return res.status(404).send('Post id:'+postid+' not found');
		if(posts[postid].comments[commentid] == null)
			return res.status(404).send('Comment id:'+commentid+' not found');

		//Edits a post's comment
		posts[postid].comments[commentid].text = comment;

		posts[postid].save(function(err) {
			if(err)
				return res.status(500).send(err);
			return res.send('Post id:'+postid+' comment id:'+commentid+' successfully updated');
		});
	});
};

//Removes a comment. Takes a postid and commentid, which is the index of the post/comment 
//sorted from oldest to newest. Returns a success message.
exports.remove_a_comment = function(req, res) {
	var postid = req.params.PostId;
	var commentid = req.params.CommentId;
	
	Post.find().sort({'created_at':'asc'}).exec(function(err, posts) {
		if (err)
			return res.status(500).send(err);
		if(posts[postid] == null)
			return res.status(404).send('Post id:'+postid+' not found');
		if(posts[postid].comments[commentid] == null)
			return res.status(404).send('Comment id:'+commentid+' not found');

		//Removes comment from post
		posts[postid].comments[commentid].remove();

		posts[postid].save(function(err) {
			if(err)
				return res.status(500).send(err);
			return res.send('Post id:'+postid+' comment id:'+commentid+' successfully removed');
		});
	});
};