import './AnswerBox.css';
import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {purple400} from 'material-ui/styles/colors';

export default class AnswerBox extends Component {

  constructor(props){
    super(props);

    this.state = {  
      newAnswer: ''
    }
    
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleAnswer(e) {
    this.setState({newAnswer: e.target.value});
  }

  handleClick(){
    this.props.onSubmit(this.state.newAnswer);
    this.setState({newAnswer: ''});
  }

  render() {

    const styleButton = {
      width: '500px'
    }
    
    return (
      <div>
        <div className="additional">
          <h3> Add Additional Answers </h3>
        </div>

        <div className="answer">
          <TextField value={this.state.newAnswer} onChange={this.handleAnswer} multiLine={true} fullWidth={true}/>
        </div>

        <div className="answerButton">
          <RaisedButton labelColor={purple400} style={styleButton} label="Submit" onClick={this.handleClick} />
        </div>
      </div>
    );
  }

}

AnswerBox.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};