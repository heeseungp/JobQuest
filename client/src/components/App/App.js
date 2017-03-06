import React, { Component } from 'react';
import logo from './logo.svg';
// import ThreadContainer from '../Thread/Thread';
import ThreadItem from '../ThreadItem/ThreadItem';
import './App.css';

class App extends Component {
  render() {
    var threadData = {title: 'Study Guide', author: 'Daniel Chia',
                      comments: [], date: '"Sun Mar 05 2017 18:37:03 GMT-0500 (EST)"', votes: 1};
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <ThreadItem data={threadData}/>
      </div>
    );
  }
}

export default App;
