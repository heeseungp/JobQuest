
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import update from 'immutability-helper';

import './ThreadItemContainer.css';

class ThreadItemContainer extends Component {

  // should have two methods here where I can update the counts
  // upvoteCount(idx) {
  //   // update the thread's count
  //   console.log('updating the count na mean');
  //   const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x+1}}); 
  //   let copy = this.state.threads.slice();
  //   copy[idx] = updatedCount;

  //   this.setState({threads: copy});
  // }

  // downvoteCount(idx) {
  //   // update the thread's count
  //   const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x-1}}); 
  //   let copy = this.state.threads.slice();
  //   copy[idx] = updatedCount;

  //   this.setState({threads: copy});
  // }
  
  render(){

    // back to the issue of making each up/down button attach to its proper ThreadItem

    return (
      <div id="threadContainer"> 
        {this.props.threads ? 
          this.props.threads.map((thread, idx) => {
            // re add upvote and downvote
            // heard it is inefficient to create a fn everything
            // the up/down prop is passed but leave until you find a better solution
            return <ThreadItem key={idx} data={thread} 
                               onUpvote={() => this.props.onUpvote(idx)}
                               onDownvote={() => this.props.onDownvote(idx)} />
          })
          : null}
      </div>
    );
  }

}

ThreadItemContainer.PropTypes = {
  threads: React.PropTypes.array.isRequired,
  onUpvote: React.PropTypes.func.isRequired,
  onDownvote: React.PropTypes.func.isRequired
};

export default ThreadItemContainer;