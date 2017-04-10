
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import update from 'immutability-helper';

import './ThreadItemContainer.css';

class ThreadItemContainer extends Component {
  
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