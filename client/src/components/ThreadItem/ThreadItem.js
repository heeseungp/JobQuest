
// now create a lists of threads
import React, { Component } from 'react';
import VoteCounter from '../VoteCounter/VoteCounter';
import './ThreadItem.css';

class ThreadItem extends Component {
  constructor(props){
    super(props);

    // still dont get this binding nonsense
    // supposedly binds the instance
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote(){
    // first execute the post and then update the UI

    this.props.upvote();
  }

  downVote(){
    this.props.downvote();
  }

  render() {
    // make date contain only MM/DD/YYYY
    var partialDate = this.props.data.date.split(' ').slice(0, 4).join(' ');

    return (
      <div className="threadItem">
        <VoteCounter upvote={this.upVote} 
                     downvote={this.downVote}
                     votes={this.props.data.votes}/>
        
        <div className="threadContent">
          <div className="title">{this.props.data.title}</div>

          <div className="details">
            <span className="author">Author - {this.props.data.author}</span> |
            <span className="numOfComments">{this.props.data.comments.length} comments</span> |
            <span className="date">Posted {partialDate}</span>
          </div>
        </div>
      </div>
    );
  }
}

ThreadItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default ThreadItem;

/*var ThreadContainer = React.createClass({
  render: function(){
    return (
      <div className="threadContainer">
       
        <h2>
          <a href="#">Recent</a> | <a href="#">Top</a> | <a href="#">Filter by</a> | <a href="#">See all</a>
        </h2>
        
        {this.props.data.map(function(thread){
          return (
            <Thread data={thread}/>
          );
        })}
      </div>
    );
  }
});*/

/*var Thread = React.createClass({
  render: function(){
    return (
      <div className="thread">
        <VoteCounter />
        
        <div className="content">
          <div className="threadTitle"> <a href="#">{this.props.data.title}</a> </div>
          <div> {this.props.data.post.slice(0, 50)} </div>
        </div>
        
      </div>
    );
  }
});*/

/*var VoteCounter = React.createClass({
  render: function(){
    return (
      <div className="counter">
        <a href="#"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
          <div> 15 </div>
        <a href="#"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
      </div>
    );
  }
});*/
