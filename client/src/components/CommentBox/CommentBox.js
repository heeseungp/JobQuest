
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import CommentList from '../CommentList/CommentList';


class CommentBox extends Component {

  // this component will receive comments list from parent to render
  // in addition it'll also get a function
  // will test that the add function has been clicked once

  render() {
    return (
      <div>
        <h3> Comments </h3>

        <input type="text" />
        <input type="button" />

        <CommentList />

      </div>
    );
  }

}

export default CommentBox;


