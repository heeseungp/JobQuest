// require our dependencies
var express = require('express'),
	app = express(),
	port = 4000,
  	mongoose = require('mongoose'),
  	Post = require('./app/models'),
	Application = require('./app/models'),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Middleware used to show all HTTP request info to the server
app.use(function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

var routes = require('./app/routes');

routes(app);

// start the server
var server = app.listen(port, function() {
	console.log('Server listening on http://%s:%s', server.address().address, server.address().port);
});