// require express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// TODO: initialize posts with the data from the file
var posts = [{"title":"Example title", "thread":"Example text", "created_at":new Date()}];

// create our router object
var router = express.Router();
// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
	console.log('Received GET request for the homepage');
	res.render('pages/index', {posts: posts});
});

// router GET call for the new thread submission  page
router.get('/new_thread', function (req, res) {
	console.log('Received a GET request for the new thread page');
	res.render('pages/newthread');
});

// router GET call for showing a select post's title and content
router.get('/show', function(req, res) {
  var id = req.query.id;
  // checks to see whether id is a number that is between 0 and the # of posts - 1
  if(!isNaN(id) && id < posts.length && id >= 0) {
  	selectedPost = posts[req.query.id];
  	res.render('pages/show', {post: selectedPost});
  }
  else{	// if it is not, returns a 404 not found error
  	res.send("404 Error, Post Not Found");
  }
});

// router POST call for parsing the submitted form and pushing the data into the array of posts
router.post('/new_thread_post', urlencodedParser, function (req, res) {
	var d = new Date();
	posts.push({
		"title":req.body.title,
		"thread":req.body.thread,
		"created_at":d
	});
	//TODO: Write this new post into a json file containing all of the posts
	res.render('pages/index', {posts: posts});
});