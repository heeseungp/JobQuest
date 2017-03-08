
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
          return <ThreadItem data={thread} />
        })
        : null}
      </div>
    </div>
  );
}

ThreadItemContainer.PropTypes = {
  items: React.PropTypes.array.isRequired
};

export default ThreadItemContainer;