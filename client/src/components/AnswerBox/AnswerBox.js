import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';


class AnswerBox extends Component {

  // this component will receive comments list from parent to render
  // in addition it'll also get a function
  // will test that the add function has been clicked once

  constructor(props){
    super(props);

    this.state = {  
      answerText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    this.setState({answerText: e.target.value});
  }

  handleClick(){
    this.props.onSubmit(this.state.text);
    this.setState({answerText: ''});
  }

  render() {
    return (
      <div>
        <h3> Add Additional Answers </h3>

        <input type="text" className="inputComment"
               onChange={this.handleChange} value={this.state.text} />
        <input type="button" id="addComment"
               onClick={this.handleClick} value="Add Comment" />

        <CommentList comments={this.props.comments} />
      </div>
    );
  }

}

AnswerBox.PropTypes = {
  comments: React.PropTypes.array.isRequired,
  onSubmit: React.PropTypes.func.isRequired
};

export default AnswerBox;


