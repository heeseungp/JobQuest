
# Auth implementation

Authentication was added to this application mainly through the help of two tutorials:

* https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
* https://vladimirponomarev.com/blog/authentication-in-react-apps-jwt

Code was taken from the tutorial and integrated into our existing app. Below is an explanation of each part of the tutorial and how everything is tied up.

### Part I

##### Client side

Since the application is using `create-react-app` as a boilerplate, the only additional dependencies added were `react-router` (version `3.0.0`),` material-ui` and `react-event-tap-plugin`.

The next important part of the tutorial is creating the two kinds of components: **Presentational** and **Container**. Presentational components only contain `HTML` and represent the view. Container components contain state and passes this state as a prop to the presentational component. This helps us maintain cleaner code and creates less bloated components.

Next part to understand is the way `react-router` is integrated. First we define a `Base` route, this is where you want to put in code that is seen throughout the application (Navbar, footer, etc.). This base route takes a `children` prop which is where the `HTML` can be changed depending on which route you want to display.

Lastly, on the file entry point, wrap your routes in a `Router` component and render it.

##### Server side

Define the routes that will handle the `POST` requests coming from the Signup and Login forms.
Go back to the container components defined for both forms and tie in the `AJAX` calls to the event handlers.


### Part II

Part II is fairly more complicated, here's attempt at a top level overview of the code.

New dependencies introduced are, `bcrypt`, `jsonwebtoken` and `passport`. There are also a couple of new directories added, an `auth` module in the client, and three folders on the server, the `User` model, an `auth` middleware and the `passport` strategies.

A quick glance into the entry point for the server tells us all these new things being added.

Here is a breakdown for each bit of code added:

##### Changes on the server

1. Defining the User Schema
2. Defining the passport strategies
  * Signup creates a new user in the db
  * Login provides a token if the user is authenticated
3. Auth middleware
  * This checks whether the request has an auth header and decodes the token
  * This route checks that a user is authenticated before the server gives access to its APi
4. Auth routes
  * The `POST` requests callbacks now pass the request to the respective passport strategy
5. Define the dashboard API
  * Once users is authenticated, they have access to this routes

##### Changes on the client

1. Routes use the auth module to display different routes if authenticated
2. Auth module
  * Contains methods to get/set and remove the token from localStorage
3. Update Base Component with a conditional on the nav bar
4. Create redirects in the pages
  * Registration sends user to login page
  * Login sends user to dashboard page
5. Create dashboard component and page

Start up both servers and the application should have authentication!

