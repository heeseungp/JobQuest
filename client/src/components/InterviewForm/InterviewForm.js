import React, { PropTypes,Component } from 'react';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardTitle} from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';

class InterviewForm extends Component {

  constructor(props){
    super(props);

    this.state = {topic: '', title: '', question:'', originalAnswer:''};
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
    const styleCard = {
      marginLeft: '250px',
      marginRight: '250px'
    }

    const styleTextField = {
      width: '50%'
    }

    const styleButton = {
      marginTop: '50px',
      marginBottom: '50px',
      width: '40%',
    }

    const styleForm = {
      marginLeft: '150px',
      marginRight: '150px'
    }

    const styleDropDown = {
      width: 400
    }


    return (
      <Card style={styleCard}>
        {/*<CardTitle titleStyle={{fontSize:'35px'}} title="Submit a New Interview Question"/>*/}
        <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
            <div style={styleForm}>
              

              <h2 className="card-heading">Submit a New Interview Question</h2>

              <TextField value={this.state.topic} onChange={this.handleTopic} fullWidth={true} hintText="Topic" multiLine={true} rows={1}/>
              
              
              {/*<DropDownMenu style={styleDropDown} value={this.state.topic} onChange={this.handleTopic} autoWidth={true}>
                <MenuItem value={1} primaryText="Data Structures" />
                <MenuItem value={2} primaryText="Algorithm" />
                <MenuItem value={3} primaryText="Database" />
                <MenuItem value={4} primaryText="Operating Systems" />
                <MenuItem value={5} primaryText="Web Front End Development" />
                <MenuItem value={6} primaryText="Web Back End Development" />
                <MenuItem value={7} primaryText="Software Engineering" />
              </DropDownMenu>*/}

              <br />
              <TextField value={this.state.title} onChange={this.handleTitle} fullWidth={true} hintText="Title" multiLine={true} rows={3}/>
              <br />
              <TextField value={this.state.question} onChange={this.handleQuestion} fullWidth={true} hintText="Question" multiLine={true} rows={3}/>
              <br />
              <TextField value={this.state.originalAnswer} onChange={this.handleAnswer} fullWidth={true} hintText="Answer" multiLine={true} rows={3}/>
              <br />
              <RaisedButton style={styleButton} primary='primary' label="Submit" type="submit"/>  
            </div>  

          </form>
        </Card>
    );

  }
}

InterviewForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default InterviewForm;