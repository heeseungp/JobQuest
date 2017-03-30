
// now create a lists of threads
import React, { Component } from 'react';
import VoteCounter from '../VoteCounter/VoteCounter';
import axios from 'axios';
import './InterviewItem.css'

class InterviewItem extends Component {
  constructor(props){
    super(props);

    // still dont get this binding nonsense
    // supposedly binds the instance
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote(){
    // first execute the post and then update the UI
    axios.post('/vote/up/' + this.props.data._id, {})
    .then((res) => {
      // console.log(res);
      this.props.upvote();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  downVote(){
    axios.post('/vote/down/' + this.props.data._id, {})
    .then((res) => {
      // console.log(res);
      this.props.downvote();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    // make date contain only MM/DD/YYYY

    return (
      <div className="InterviewItem">
        <VoteCounter upvote={this.upVote} 
                     downvote={this.downVote}
                     votes={this.props.data.votes}/>
        
        <div className="threadContent">
          <div className="title">{this.props.data.title}</div>

          <div className="details">
            <span className="author">Author - {this.props.data.author}</span> |
            <span className="numOfComments">{this.props.data.comments.length} comments</span> |
            <span className="date">Posted {this.props.data.created_at.slice(0, 10)}</span>
          </div>
        </div>
      </div>
    );
  }
}

InterviewItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default InterviewItem;
