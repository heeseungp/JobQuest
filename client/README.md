
# Frontend for JobQuest

This uses the [create-react-app](https://github.com/facebookincubator/create-react-app) boilerplate

# Component structure

Each component has its own directory which will contain 3 files:

* `Component.js`
* `ComponentContainer.js`
* `Component.test.js`

`Component` is the presentational component, only contains the view. `ComponentContainer` renders `Component`, passing the necessary state as `prop`. Test file to test for proper rendering and functionality. 

