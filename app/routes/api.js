'use strict';

const express = require('express');


const router = new express.Router();

// when the user is logged in, access is granted to this API
router.get('/dashboard', (req, res) => {

  // made it pass the middleware and got the userID
  console.log('I want to know who the user is', req.userID);
  res.status(200).json({
    message: "You're authorized to see this secret message."
  });
});


module.exports = router;