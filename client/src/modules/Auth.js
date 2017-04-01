
class Auth {

  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage.
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('token');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('token');
  }

}

var axios = require('axios');
/* The interceptor below will add the authorization header to all axios request.
This should prevent issues where we do not add the header by mistake.*/
axios.interceptors.request.use(function (config) {

  var token = Auth.getToken();

  if (token) {
    config.headers['authorization'] = 'Bearer ' + token;
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});
export default Auth;
