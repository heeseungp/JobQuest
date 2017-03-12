'use strict';
module.exports = function(app) {
  var controller = require('./controller');
  var applController = require('./entries'); // for application entries

  app.route('/posts')
    .get(controller.show_all_posts)
    .post(controller.create_a_post);

  
  app.route('/applications')
    .get(applController.show_all_applications)
    .post(applController.create_an_application);

  app.route('/applications/:ApplicationId')
    .get(applController.show_an_application)
    .post(applController.edit_an_application)
    .delete(applController.remove_an_application);


  app.route('/posts/:PostId')
    .get(controller.show_a_post)
    .post(controller.add_a_comment);

  app.route('/vote/:type/:PostId')
  	.get(controller.vote_on_post);

  app.use(function(req, res) {
  	res.status(404).send({url: req.originalUrl + ' not found'});
  });
};