
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import CommentList from '../CommentList/CommentList';
import RaisedButton from 'material-ui/RaisedButton';
import './CommentBox.css';

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

        <textarea rows="5" cols="50"
               onChange={this.handleChange} value={this.state.text} />
        <div onClick={this.handleClick}>
          <RaisedButton label="Add Comment" labelStyle={{fontSize:10}} primary />
        </div>

        <CommentList comments={this.props.comments} onEdit={this.props.onEdit} onDelete={this.props.onDelete} />
      </div>
    );
  }

}

CommentBox.PropTypes = {
  comments: React.PropTypes.array.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired
};

export default CommentBox;


