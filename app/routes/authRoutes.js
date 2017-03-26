'use strict';

module.exports = function(app) {
	var controller = require('../controllers/authController');

	// GET REQUESTS

	// POST REQUESTS
	app.route('/signup')
		.post(controller.signup);
	app.route('/login')
		.post(controller.login);

    // DELETE REQUESTS
};