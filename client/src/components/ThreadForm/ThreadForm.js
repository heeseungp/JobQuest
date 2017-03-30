import React, { Component } from 'react';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Auth from '../../modules/Auth';
import axios from 'axios';

class ThreadForm extends Component {

  constructor(props){
    super(props);

    this.state = {title: '', desc: ''}

    // I hate writing these bindings
    this.handleTitle = this.handleTitle.bind(this);
    this.handleDesc = this.handleDesc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    // still not too familiar with this event object
    this.setState({title: event.target.value});
  }

  handleDesc(event) {
    this.setState({desc: event.target.value});
  }

  handleSubmit(event) {

    var newThread = {title: this.state.title, thread: this.state.desc};
    // create a new thread on db
    axios.post('/posts/create', newThread, 
               { headers: {authorization: 'bearer ' + Auth.getToken()} })
    .then((res) => {
      // no way to update the UI here, need to rework the app architecture
      console.log('success', res);

    })
    .catch((err) => {
      console.log(err);
    });

    // don't know what this does either
    event.preventDefault();
  }

  render(){
    return (
      <Card className="container">
        <form onSubmit={this.handleSubmit}>

          <h2 className="card-heading">New Post</h2>

          <div className="field-line">
            <TextField hintText="Enter title" id="tTitle" fullWidth={true}
                        value={this.state.title} onChange={this.handleTitle} />
          </div>
          
          <div className="field-line">
            <TextField hintText="Enter description" id="tDesc" 
                        multiLine={true} rows={5} rowsMax={10} fullWidth={true}
                        value={this.state.desc} onChange={this.handleDesc} />
          </div>

          <div className="button-line">
            <RaisedButton id="submitButton" type="submit" label="Create new post" primary />
          </div>

        </form>
      </Card>
    );

  }
}

export default ThreadForm;