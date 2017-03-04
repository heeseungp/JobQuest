import React, { Component } from 'react';
import logo from './logo.svg';
import ThreadContainer from '../Thread/Thread';
import FutureEvents from '../Events/FutureEvents';
import './App.css';

class App extends Component {
  render() {
    var threadData = [
      { title: 'Study guide for interning at the Big 4',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', upvotes: 15 }, { title: 'Study guide for interning at the Big 4',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', upvotes: 15 }, { title: 'Study guide for interning at the Big 4',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', upvotes: 15 }, { title: 'Study guide for interning at the Big 4',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', upvotes: 15 }, { title: 'Study guide for interning at the Big 4',
      post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', upvotes: 15 }
    ];

    return (
      <div>
      <nav>
        <div className="nav-wrapper blue-grey darken-4">
          <a className="brand-logo center">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
      </nav>
      <div className="row">
          <ThreadContainer data={threadData} />
          <FutureEvents />
      </div>
    </div>
    );
  }
}
// TODO: add Event containers
export default App;
