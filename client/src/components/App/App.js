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
    var eventData = [
      {title:'Mar 14th', post:'Job Fair at NYU'},
      {title:'May 4th',  post:'Hackathon at CUNY Grad Center'},
      {title:'June 21',  post:'Job Fair at WeWorks NoMad'}
    ];

    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <a className="brand-logo center">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">
                <i className="material-icons right">more_vert</i></a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
            <ThreadContainer data={threadData} />
            <FutureEvents  data={eventData}/>
        </div>
    </div>
    );
  }
}
// TODO: add Event containers
export default App;
