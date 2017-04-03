'use strict';
module.exports = function(app) {
	var controller = require('../controllers/answerController');

	// GET REQUESTS

	// POST REQUESTS
	app.route('/questions/:QuestionId/answers/create')
		.post(controller.add_an_answer);
	app.route('/questions/:PostId/answers/:CommentId/edit')
		.post(controller.edit_an_answer);

	// DELETE REQUESTS
	app.route('/questions/:QuestionId/answers/:AnswerId/remove')
		.delete(controller.remove_an_answer);
};