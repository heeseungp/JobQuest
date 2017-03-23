const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const config = require('../../config');


/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {

  console.log('passing through the middleware route');

  if (!req.headers.authorization) {
    console.log('no auth');
    return res.status(401).end();
  }

  console.log('after authorization');
  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];

  // decode the token using a secret key-phrase
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const userId = decoded.sub;
    console.log('the userid is, ', userId);
    // adding the ID to the request to make calls to db later
    req.userID = userId;

    // check if a user exists
    return User.findById(userId, (userErr, user) => {
      if (userErr || !user) {
        return res.status(401).end();
      }

      return next();
    });
  });
};