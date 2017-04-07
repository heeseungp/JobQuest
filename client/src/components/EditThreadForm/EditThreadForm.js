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
    // name filed is undefined for e.target...

    // for multiple inputs, attach a name to the tag
    // update with [name]: value
    var name = e.target.name;

    this.setState({[name]: e.target.value});
  },

  handleClick(){
    this.props.handleEdit();
  },

  render(){
    return (
      <div>
        <input type="text" id="editTitle" name="titleInput"
               value={this.state.titleInput} onChange={this.handleChange} />
        <input type="text" id="editDesc" name="descInput"
               value={this.state.descInput} onChange={this.handleChange} />
        <button onClick={this.handleClick} >Save</button>
      </div>
    );
  }

}); 

EditThreadForm.PropTypes = {
  title: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  handleEdit: React.PropTypes.func.isRequired
}

export default EditThreadForm;