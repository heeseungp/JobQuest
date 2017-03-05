import React, { Component } from 'react';
import logo from './logo.svg';
// import ThreadContainer from '../Thread/Thread';
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
      </div>
    );
  }
}

export default App;
