'use strict';
module.exports = function(app) {
	var controller = require('../controllers/commentController');

	// GET REQUESTS

	// POST REQUESTS
	app.route('/posts/:PostId/comments/create')
		.post(controller.add_a_comment);
	app.route('/posts/:PostId/comments/:CommentId/edit')
		.post(controller.edit_a_comment);

	// DELETE REQUESTS
	app.route('/posts/:PostId/comments/:CommentId/remove')
		.delete(controller.remove_a_comment);
};