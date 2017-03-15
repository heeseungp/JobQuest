import React, { Component } from 'react';
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
    axios.post('/posts', newThread)
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
      <div>
        <form className="col s8" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input value={this.state.title} id="tTitle" type="text" 
                    className="validate" onChange={this.handleTitle} />
              <label>Title</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <textarea id="tDesc" className="materialize-textarea"
                        value={this.state.desc} onChange={this.handleDesc} ></textarea>
              <label>Description</label>
            </div>
          </div>

          <input id="submitButton" type="submit" value="Create new thread" 
                className="waves-effect waves-light btn" />
        </form>
      </div>
    );

  }
}

export default ThreadForm;