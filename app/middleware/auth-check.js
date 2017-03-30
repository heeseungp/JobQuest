const jwt = require('jsonwebtoken');
const User = require('mongoose').set('debug', true).model('User');
const config = require('../../config');

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {

  req.isValidUser = false;
  console.log('Passing through the auth checker middleware');

  if (!req.headers.authorization) {
    console.log('No authorization token provided');
    return next();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  console.log('Received token '+token);

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) { 
      console.log('Error decoding token, token could not be verified');
      return next();
    }

    const userId = decoded.sub;
    console.log('Decoded token, the userid is, ', userId);

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        console.log('Error finding user with this userid, ', userErr, user);
        return next();
      }
      console.log('User '+user.name+' successfully made a request');
      //setting flag for successful authentication and saving user to request
      req.isValidUser = true;
      req.user = user;
      return next();
    });
  });
};