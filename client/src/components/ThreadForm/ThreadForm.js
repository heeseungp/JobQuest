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
    

    // don't know what this does either
    event.preventDefault();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input id="tTitle" type="textarea" 
                 value={this.state.title} onChange={this.handleTitle}/>
        </label>
        <label>
          Description:
          <textarea id="tDesc" 
                 value={this.state.desc} onChange={this.handleDesc}/>
          
        </label>

        <input id="submitButton" type="submit" value="Create new thread" />
      </form>
    );

  }
}

export default ThreadForm;