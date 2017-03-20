
# Frontend for JobQuest

This uses the [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate

# Component structure

Each component has its own directory which will contain 3 files:

* `Component.js`
* `ComponentContainer.js`
* `Component.test.js`

`Component` is the presentational component, only contains the view. `ComponentContainer` renders `Component`, passing the necessary state as `prop`. Test file to test for proper rendering and functionality. 

The `Container` files have been changed to `Page` to make the name less verbose. 
ie. `LoginForm` is the presentational component and `LoginPage` is the container component.

