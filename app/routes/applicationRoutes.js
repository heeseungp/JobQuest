'use strict';
module.exports = function(app) {
	var controller = require('../controllers/applicationController');

	// GET REQUESTS
	app.route('/applications')
		.get(controller.show_all_applications);
	app.route('/applications/:ApplicationId/show')
		.get(controller.show_an_application);

	// POST REQUESTS
	app.route('/applications/create')
		.post(controller.create_an_application);
	app.route('/applications/:ApplicationId/edit')
		.post(controller.edit_an_application);

	// DELETE REQUESTS
	app.route('/applications/:ApplicationId/remove')
		.delete(controller.remove_an_application);
};