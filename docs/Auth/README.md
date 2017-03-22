
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

