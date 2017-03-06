
import React, { Component } from 'react';

function VoteCounter(props){
  return (
    <div>
      <a href="">Upvote</a>
      <a href="">Downvote</a>
      <div className="voteCount">{props.votes}</div>
    </div>
  );
}

VoteCounter.propTypes = {
  votes: React.PropTypes.number.isRequired
};

export default VoteCounter;
