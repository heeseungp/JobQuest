'use strict';
module.exports = function(app) {
  var controller = require('./controller');

  app.route('/posts')
    .get(controller.show_all_posts)
    .post(controller.create_a_post);

////////////////////////////////////////////////
  
  app.route('/applications')
    .get(controller.show_all_applications)
    .post(controller.create_an_application);

  app.route('/applications/:ApplicationId')
    .get(controller.show_an_application)
    .post(controller.edit_an_application); // could be changed to .put for an update

/////////////////////////////////////////////////

  app.route('/posts/:PostId')
    .get(controller.show_a_post)
    .post(controller.add_a_comment);

  app.route('/vote/:type/:PostId')
  	.get(controller.vote_on_post);

  app.use(function(req, res) {
  	res.status(404).send({url: req.originalUrl + ' not found'});
  });
};