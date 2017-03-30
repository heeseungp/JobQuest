
// now create a lists of threads
import React, { Component } from 'react';
import VoteCounter from '../VoteCounter/VoteCounter';
import Paper from 'material-ui/Paper'
import { Link } from 'react-router';
import axios from 'axios';
import Auth from '../../modules/Auth';
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
    // post fn is of the form - url, data, options
    axios.post('/vote/up/' + this.props.data._id, {},
      { headers: {authorization: 'bearer ' + Auth.getToken()} })
      .then((res) => {
        // console.log(res);
        this.props.upvote();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  downVote(){
    axios.post('/vote/down/' + this.props.data._id, {},
      { headers: {authorization: 'bearer ' + Auth.getToken()} })
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

    const style = {
      height: 90,
      width: 850,
      margin: 20,
    };

    var linkToThread = this.props.data ? "thread/" + this.props.data._id
                                       : null;

    return (
      <Paper className="threadItem" style={style} zDepth={1}>

        {this.props.data ? 
          <div>
            <VoteCounter upvote={this.upVote} 
                        downvote={this.downVote}
                        votes={this.props.data.votes}/>

            <div className="threadContent">
              <div className="title">
                <Link to={linkToThread}>{this.props.data.title}</Link>
              </div>

              {this.props.showDesc ? 
                // this is pretty ugly but eh
                <div className="desc">
                  <div> {this.props.data.thread} </div>
                </div>
                : null
              }
              
              <div className="details">
                <span className="author">Author - {this.props.data.author}</span> |
                <span className="numOfComments">{this.props.data.comments.length} comments</span> |
                <span className="date">Posted {this.props.data.created_at.slice(0, 10)}</span>
              </div>
            </div>
          </div>
         : null
        }
      
      </Paper>
    );
  }
}

ThreadItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default ThreadItem;
