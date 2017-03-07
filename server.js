// require our dependencies
var express = require('express'),
	app = express(),
	port = 4000,
  	mongoose = require('mongoose'),
  	Post = require('./app/models'),
	bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes');
routes(app);

// start the server
var server = app.listen(port, function() {
	console.log('Server listening on http://%s:%s', server.address().address, server.address().port);
});