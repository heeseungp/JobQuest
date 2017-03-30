
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import update from 'immutability-helper';

class ThreadItemContainer extends Component {
  // has to be switched back to a class Component
  // this container will contain the two methods

  constructor(props){
    super(props);

    this.state = {
      threads: []
    };

    // without these, instances don't have these methods
    this.upvoteCount = this.upvoteCount.bind(this);
    this.downvoteCount = this.downvoteCount.bind(this);
  }

  // should have two methods here where I can update the counts
  upvoteCount(idx) {
    // update the thread's count
    console.log('updating the count na mean');
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

  componentDidMount() {

    const url = '/posts/'; 
    axios.get(url)
      .then(res => {
        console.log(res.data);
        this.setState({threads: res.data})
      });

    // mongo jobquest --eval "db.dropDatabase()" => to reset DB
  }

  render(){

    return (
      <div> 
        {this.state.threads ? 
          this.state.threads.map((thread, idx) => {
            return <ThreadItem key={idx} data={thread} upvote={() => this.upvoteCount(idx)}
                                                        downvote={() => this.downvoteCount(idx)}/>
          })
          : null}
      </div>
    );
  }

}

ThreadItemContainer.PropTypes = {
  items: React.PropTypes.array.isRequired
  // add two funcs, TODO
};

export default ThreadItemContainer;