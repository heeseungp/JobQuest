// require our dependencies
var express = require('express');
var app = express();
var port = 4000;

//set the view engine to ejs
app.set('view engine', 'ejs');

//route our app
var router = require('./app/routes');
app.use('/',router);

//set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// start the server
var server = app.listen(port, function() {
	console.log('Server listening on http://%s:%s', server.address().address, server.address().port);
});