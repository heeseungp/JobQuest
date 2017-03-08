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
         <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">JobQuest</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">Sass</a></li>
              <li><a href="#">Components</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </nav>
        <div className="row">
            <ThreadItemContainer items={items}/>
            <FutureEvents  data={eventData}/>
        </div>
			</div>
    );



  }
}
// TODO: add Event containers
export default App;
