// require express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// TODO: initialize posts with the data from the file
var posts = [{"title":"Example title", "thread":"Example text", "votecount":3, "created_at":new Date(), "comment":['hi', 'hello']}];

// create our router object
var router = express.Router();
// export our router
module.exports = router;

// simple function that returns true if a number is within or equal to two bounds, and false otherwise
function checkNumRange(number, lowerBound, upperBound) {
	if(isNaN(number)){	// if number isn't really a number, return false immediately
		return false;
	}
	if(number >= lowerBound && number <= upperBound){
		return true;
	}
	else {
		return false;
	}
}

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

// router GET call for showing a selected post's title and content
router.get('/show', function(req, res) {
  var id = req.query.id;
  // checks to see whether id is a number that is between 0 and the # of posts - 1
  if(checkNumRange(id, 0, posts.length - 1)) {
  	res.render('pages/show', {post: posts[id], id:id});
  }
  else{	// if it is not, returns a 404 not found error
  	res.send("404 Error, post not found due to invalid id");
  }
});

// router POST call for parsing the submitted form and pushing the data into the array of posts
router.post('/new_thread_post', urlencodedParser, function (req, res) {
	var d = new Date();
	posts.push({
		"title":req.body.title,
		"thread":req.body.thread,
		"votecount":0,
		"created_at":d,
		"comment": ['']
	});
	//TODO: Write this new post into a json file containing all of the posts
	///res.render('pages/index', {posts: posts});
	res.redirect('/');
});


// router POST call for parsing the submitted comment and pushing the data into the array of comments
router.post('/new_show_post', urlencodedParser, function (req, res) {
	var id = req.query.id;
	if(checkNumRange(id, 0, posts.length - 1)) {
		posts[id].comment.push(req.body.comment);
		res.redirect('/show?id=' + id);
	}
	else {
		res.send("404 Error, post not found due to invalid id");
	}
});

// router POST call for voting up a selected post
router.post('/vote_up_post', function(req, res) {
  var id = req.query.id;
  if(checkNumRange(id, 0, posts.length - 1)) {
  	posts[id].votecount++;
  	res.redirect('back');	// Redirects to the page BEFORE the post call, allows us to upvote/downvote on any page
  }
  else{
  	res.send("404 Error, post not found due to invalid id");
  }
});

// router POST call for voting down a selected post
router.post('/vote_down_post', function(req, res) {
  var id = req.query.id;
  if(checkNumRange(id, 0, posts.length - 1)) {
  	posts[id].votecount--;
  	res.redirect('back');
  }
  else{
  	res.send("404 Error, post not found due to invalid id");
  }
});
