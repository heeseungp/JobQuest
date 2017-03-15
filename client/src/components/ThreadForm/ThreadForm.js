import React, { Component } from 'react';

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
    // create a new thread on db
    aleart('you are submitting: ', this.state.title, this.state.desc);

    // don't know what this does either
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input id="threadTitle" type="text" 
                 value={this.state.title} onChange={this.handleTitle}/>
        </label>
        <label>
          <input id="threadDesc" type="textarea"
                 value={this.state.desc} onChange={this.handleDesc} />
        </label>

        <input id="submitButton" type="submit" value="Create new thread" />
      </form>
    );

  }
}

export default ThreadForm;