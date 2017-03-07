'use strict';
module.exports = function(app) {
  var controller = require('./controller');

  app.route('/posts')
    .get(controller.show_all_posts)
    .post(controller.create_a_post);

  app.route('/posts/:PostId')
    .get(controller.show_a_post)
    .post(controller.add_a_comment);

  app.route('/vote/:type/:PostId')
  	.get(controller.vote_on_post);

  app.use(function(req, res) {
  	res.status(404).send({url: req.originalUrl + ' not found'});
  });
};