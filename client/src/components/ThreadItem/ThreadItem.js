
// now create a lists of threads
import React, { Component } from 'react';
import VoteCounter from '../VoteCounter/VoteCounter';
import ThreadItemContent from '../ThreadItemContent/ThreadItemContent';
// import './Thread.css';

class ThreadItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      votes: this.props.data.votes
    };
  }

  upVote(){
    this.setState({votes: this.state.votes+1});
  }

  downVote(){
    this.setState({votes: this.state.votes-1});
  }

  render() {
    return (
      <div>
        <VoteCounter/>
        <ThreadItemContent/>
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
