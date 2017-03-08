import React, { Component } from 'react';
import logo from './logo.svg';
// import ThreadContainer from '../Thread/Thread';
import ThreadItem from '../ThreadItem/ThreadItem';
import FutureEvents from '../Events/FutureEvents';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer';

import './App.css';

class App extends Component {
  render() {
    // var threadData = {title: 'Study Guide', author: 'Daniel Chia',
    //                   comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1};
    
    const items = [
      {title: 'Study Guide', author: 'Daniel Chia', comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 1},
      {title: 'Study Guide', author: 'Daniel Chia', comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 15},
      {title: 'Study Guide', author: 'Daniel Chia', comments: [], date: 'Sun Mar 05 2017 18:37:03 GMT-0500 (EST)', votes: 7}
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
            <FutureEvents  data={eventData}/>
        </div>
        
        <ThreadItemContainer items={items}/>

        {/*<ThreadItem data={threadData}/>*/}
			</div>
    );
  }
}
// TODO: add Event containers
export default App;
