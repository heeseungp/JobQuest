
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class CommentList extends Component {

  render() {
    return (
      <div>
        <ul>
          { this.props.comments ? 
            this.props.comments.map((comment) => (
              <li key={comment} > {comment} </li>
            ))
            : null
          }     
        </ul>
      </div>
    );
  }
}



export default CommentList;


