import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <Router>
      <Route exact path="/" component={App}/>
  </Router>,
  document.getElementById('root')
);

