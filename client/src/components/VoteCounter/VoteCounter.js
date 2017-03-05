
import React, { Component } from 'react';

function VoteCounter(props){
  return (
    <div>
      <div className="voteCount">{props.votes}</div>
    </div>
  );
}

VoteCounter.propTypes = {
  votes: React.PropTypes.number.isRequired
};

export default VoteCounter;