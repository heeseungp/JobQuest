import Base from './components/Base/Base';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginForm/LoginPage';
import SignUpPage from './components/SignUpForm/SignUpPage';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: HomePage
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    }

  ]
};

export default routes;