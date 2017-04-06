import React, { Component } from 'react';
import axios from 'axios';

var EditThreadForm = React.createClass({

  getInitialState() {
    return {
      titleInput: this.props.title || '',
      descInput: this.props.desc || ''
    };
  },

  render() {
    return (
      <div>
        <input/>
        <input/>
        <button>Save</button>
      </div>
    );
  }

}); 

export default EditThreadForm;