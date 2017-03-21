'use strict';

module.exports = function(app) {
	
	// GET REQUESTS
	app.route('/dashboard')
		.get((req, res) => {
      res.status(200).json({
        message: "You're authorized to see this secret message."
      });
    });

};