// require express
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var posts = [];

// create our router object
var router = express.Router();
//export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
	console.log('Received GET request for the homepage');
	res.render('pages/index', {posts: posts});
});

router.get('/new_thread', function (req, res) {
	console.log('Received a GET request for the new thread page');
	res.render('pages/newthread');
});

router.get('/show', function(req, res) {
  selectedPost = posts[req.query.id];
  res.render('pages/show', {post: selectedPost});
});

router.post('/new_thread_post', urlencodedParser, function (req, res) {
	var d = new Date();
	posts.push({
		"title":req.body.title,
		"thread":req.body.thread,
		"created_at":d
	});
	res.render('pages/result')
});