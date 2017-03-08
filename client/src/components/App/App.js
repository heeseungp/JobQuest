import React, { Component } from 'react';
import logo from './logo.svg';
// import ThreadContainer from '../Thread/Thread';
import ThreadItem from '../ThreadItem/ThreadItem';
import FutureEvents from '../Events/FutureEvents';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer';
import axios from 'axios';
import update from 'immutability-helper';

import './App.css';

class App extends Component {
  // should all the data be held up here and pass down methods for things to be update?
  // seems rather inefficient

  constructor(props){
    super(props);

    this.state = {
      threads: []
    };

    // without these, instances don't have these methods
    this.upvoteCount = this.upvoteCount.bind(this);
    this.downvoteCount = this.downvoteCount.bind(this);
  }

  componentDidMount() {
    const url = 'http://rest.learncode.academy/api/am/friends'; 
    axios.get(url)
      .then(res => {
        console.log(res.data);
        this.setState({threads: res.data})
      });

    // const dummy = {title: 'Study guide', author: 'Daniel Chia', comments: [],
    //                date: 'Sun Mon 09 1993', votes: 15};
    // axios.post(url, dummy)
    // .then(() => {console.log('cool')});

  }

  // should have two methods here where I can update the counts
  upvoteCount(idx) {
    // update the thread's count
    const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x+1}}); 
    let copy = this.state.threads.slice();
    copy[idx] = updatedCount;

    this.setState({threads: copy});
  }

  downvoteCount(idx) {
    // update the thread's count
    const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x-1}}); 
    let copy = this.state.threads.slice();
    copy[idx] = updatedCount;

    this.setState({threads: copy});
  }

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
          <ThreadItemContainer items={this.state.threads} 
                               upvote={this.upvoteCount} downvote={this.downvoteCount}/>
          <FutureEvents  data={eventData}/>
        </div>
			</div>
    );

  }
}
// TODO: add Event containers
export default App;
