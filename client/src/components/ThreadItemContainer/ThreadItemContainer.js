
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';
import Paper from 'material-ui/Paper';
import axios from 'axios';
import update from 'immutability-helper';

import './ThreadItemContainer.css';

class ThreadItemContainer extends Component {
  
sortByKey(array, key) {
  if(key == 'votes' || key == 'created_at'){
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
  }
  else if(key == 'title'){
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  else if(key == 'comments'){
    return array.sort(function(a, b) {
        var x = a[key].length; var y = b[key].length;
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    });
  }
  else{
    return array;
  }
}

  render(){

    // back to the issue of making each up/down button attach to its proper ThreadItem
    if(this.props.threads !== undefined){
    var sortedarray = this.sortByKey(this.props.threads, this.props.sortvalue);
    }

    return (
      <div> 
        {this.props.threads ? 
          sortedarray.map((thread, idx) => {
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