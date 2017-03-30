
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import CommentList from '../CommentList/CommentList';


class CommentBox extends Component {

  // this component will receive comments list from parent to render
  // in addition it'll also get a function
  // will test that the add function has been clicked once

  constructor(props){
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({text: e.target.value});
  }

  handleClick(){
    this.props.onSubmit(this.state.text);
    this.setState({text: ''}); // clear input
  }

  render() {
    return (
      <div>
        <h3> Comments </h3>

        <input type="text" className="inputComment"
               onChange={this.handleChange} value={this.state.text} />
        <input type="button" id="addComment"
               onClick={this.handleClick} value="Add Comment" />

        <CommentList comments={this.props.comments} />
      </div>
    );
  }

}

CommentBox.PropTypes = {
  comments: React.PropTypes.array.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default CommentBox;


