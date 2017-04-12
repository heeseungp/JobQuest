import React, { PropTypes,Component } from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {purple500, blue500, grey50} from 'material-ui/styles/colors';
import './InterviewForm.css'



class InterviewForm extends Component {

  constructor(props){
    super(props);

    this.state = {topic: 'Algorithm', title: '', question:'', originalAnswer:'', errorText: ''};
    // I hate writing these bindings
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleTopic = this.handleTopic.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleTopic(event) {
    // still not too familiar with this event object
    this.setState({topic: event.target.value});
  }


  handleTitle(event) {
    // still not too familiar with this event object
    this.setState({title: event.target.value});
  }


  handleQuestion(event) {
    this.setState({question: event.target.value});
  }


  handleAnswer(event) {
    this.setState({originalAnswer: event.target.value});
  }


  handleSubmit(event) {

    var newQuestion = {topic: this.state.topic, title: this.state.title, question: this.state.question, originalAnswer: this.state.originalAnswer};
    // create a new thread on db

    if(newQuestion.title == '' || newQuestion.question == '' || newQuestion.answer == ''){
      alert('All fields is required');
    }

    axios.post('/interviewQuestions/create', newQuestion)
    .then((res) => {
      // no way to update the UI here, need to rework the app architecture
      console.log('success', res);

      // make it redirect to the page of the post
      this.context.router.replace('/interview');
    })
    .catch((err) => {
      console.log(err);
    });

    // don't know what this does either
    event.preventDefault(); 
  }






  render(){

    const styleHeading = {
      color: 'purple'
    }

    const styleButton = {
      marginTop: '50px',
      marginBottom: '50px',
      width: '40%',
    }

    const styleDropDown = {
      width: 400
    }

    const styleCustomWidth = {
      width: 400
    }

    const styleTextField = {
      errorStyle: {
        color: purple500,
      },
      underlineStyle: {
        borderColor: purple500,
      },
      hintStyle: {
        color: purple500,
      },
      floatingLabelFocusStyle: {
        color: purple500,
      }
    }


    return (


        <div>
          <Paper className="container">
            <h1 style={styleHeading} className="heading">Submit a New Interview Preparation Question</h1>
            <form onSubmit={this.handleSubmit}>

            <div className="topic">
                <DropDownMenu style={styleCustomWidth} value={this.state.topic} onChange={this.handleTopic} autoWidth={false}>
                  <MenuItem value={'Algorithm'} primaryText="Algorithm" />
                  <MenuItem value={'Database'} primaryText="Database" />
                  <MenuItem value={'Shell'} primaryText="Shell" />
                  <MenuItem value={'Software Engineering'} primaryText="Software Engineering" />
                  <MenuItem value={'System Design'} primaryText="System Design" />
                </DropDownMenu>
              </div>


              <div className="titlee">
                <TextField value={this.state.title} 
                            onChange={this.handleTitle} 
                            fullWidth={true} 
                            hintText="Title" 
                            hintStyle={styleTextField.hintStyle}
                            underlineFocusStyle={styleTextField.underlineStyle}
                            multiLine={true} rows={1}
                            />
              </div>

              <div className="question">
                <TextField value={this.state.question} 
                            onChange={this.handleQuestion} 
                            fullWidth={true} 
                            hintText="Question" 
                            hintStyle={styleTextField.hintStyle}
                            underlineFocusStyle={styleTextField.underlineStyle}
                            multiLine={true} rows={2}
                            />              
              </div>

              <div className="answer">
                <TextField value={this.state.originalAnswer} 
                            onChange={this.handleAnswer} 
                            fullWidth={true} 
                            hintText="Answer" 
                            hintStyle={styleTextField.hintStyle}
                            underlineFocusStyle={styleTextField.underlineStyle}
                            multiLine={true} rows={3}
                            />              
              </div>

              <div className="button">
                <RaisedButton backgroundColor={purple500} style={styleButton} labelColor={grey50} label="Submit" type="submit"/>  
              </div>

            </form>
          </Paper>
        </div>

    );

  }
}

InterviewForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default InterviewForm;