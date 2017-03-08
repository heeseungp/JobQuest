
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';

function ThreadItemContainer(props){
  return (
    <div>
      {props.items ? 
        props.items.map((thread, idx) => {
          return <ThreadItem data={thread} />
        })
        : null}
    </div>
  );
}

ThreadItemContainer.PropTypes = {
  items: React.PropTypes.array.isRequired
};

export default ThreadItemContainer;