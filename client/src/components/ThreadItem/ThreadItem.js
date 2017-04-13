
// now create a lists of threads
import React, { Component } from 'react';
import VoteCounter from '../VoteCounter/VoteCounter';
import Paper from 'material-ui/Paper'
import { Link } from 'react-router';
import axios from 'axios';
import Auth from '../../modules/Auth';
import './ThreadItem.css';

class ThreadItem extends Component {

  render() {
    // make date contain only MM/DD/YYYY

    // hacking the height for singular page
    const style = {
      minHeight: 80,
      margin: 20,
    };

    var linkToThread = this.props.data ? "thread/" + this.props.data._id
                                       : null;

    return (
      <Paper className="threadItem" style={style} zDepth={1}>

        {this.props.data ? 
          <div>
            <VoteCounter votes={this.props.data.votes}
                         onUpvote={this.props.onUpvote}
                         onDownvote={this.props.onDownvote} />

            <div className="threadContent">
              <div className="title">
                <Link to={linkToThread}>{this.props.data.title}</Link>
              </div>
              
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
