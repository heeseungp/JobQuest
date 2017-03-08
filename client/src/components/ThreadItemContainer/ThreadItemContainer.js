
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';

function ThreadItemContainer(props){
  return (
    <div className="col m8">
      <div className="card-panel white z-depth-4"> 
        <div className="card-action">
          <h3>Threads</h3> 
        </div>
      {props.items ? 
        props.items.map((thread, idx) => {
          return <ThreadItem key={idx} data={thread} upvote={() => props.upvote(idx)}
                                                    downvote={() => props.downvote(idx)}/>
        })
        : null}
      </div>
    </div>
  );
}

ThreadItemContainer.PropTypes = {
  items: React.PropTypes.array.isRequired
  // add two funcs, TODO
};

export default ThreadItemContainer;