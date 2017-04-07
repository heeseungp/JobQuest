import React, { Component } from 'react';
import axios from 'axios';

var EditThreadForm = React.createClass({

  getInitialState(){
    return {
      titleInput: this.props.title || '',
      descInput: this.props.desc || ''
    };
  },

  handleChange(e){
    // for multiple inputs, attach a name to the tag
    // update with [name]: value

    this.setState({titleInput: e.target.value});
  },

  render(){
    return (
      <div>
        <input id="editTitle" 
               value={this.state.titleInput} onChange={this.handleChange} />
        <input id="editDesc" />
        <button>Save</button>
      </div>
    );
  }

}); 

export default EditThreadForm;