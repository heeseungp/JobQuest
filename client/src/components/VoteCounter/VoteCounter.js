
import React, { Component } from 'react';
import './VoteCounter.css';

function VoteCounter(props){
  return (
    <div className="counter">
      <a className="upvote" href="#/" onClick={props.onUpvote}>
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </a>

      <div className="voteCount">{props.votes}</div>

      <a className="downvote" href="#/" onClick={props.downvote}>
        <i className="fa fa-chevron-down" aria-hidden="true"></i>
      </a>
    </div>
  );
}

VoteCounter.propTypes = {
  votes: React.PropTypes.number.isRequired,
  onUpvote: React.PropTypes.func.isRequired,
  onDownvote: React.PropTypes.func.isRequired
};

export default VoteCounter;
