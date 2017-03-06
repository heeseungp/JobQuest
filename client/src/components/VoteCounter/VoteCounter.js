
import React, { Component } from 'react';

function VoteCounter(props){
  return (
    <div>
      <a className="upvote" href="#" onClick={props.upvote}>Upvote</a>
      <a className="downvote" href="#" onClick={props.downvote}>Downvote</a>
      <div className="voteCount">{props.votes}</div>
    </div>
  );
}

VoteCounter.propTypes = {
  votes: React.PropTypes.number.isRequired,
  upvote: React.PropTypes.func.isRequired,
  downvote: React.PropTypes.func.isRequired
};

export default VoteCounter;
