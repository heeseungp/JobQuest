
import React, { Component } from 'react';
import VoteCounter from '../VoteCounter/VoteCounter';
import Paper from 'material-ui/Paper'
import { Link } from 'react-router';
import EditThreadForm from '../EditThreadForm/EditThreadForm';
import axios from 'axios';
import Auth from '../../modules/Auth';

import '../ThreadItem/ThreadItem.css';

const ThreadPageItem = React.createClass({

  getInitialState() {
    return {
      edit: false
    };
  },

  toggleEdit() {
    this.setState({edit: !this.state.edit})
  },

  render() {
    // make date contain only MM/DD/YYYY

    // hacking the height for singular page
    const style = {
      minHeight: 80,
      padding: 15,
      margin: 20,
      modify: {
        display: 'inline-block',
        margin: 5
      },
      content: {
        padding: 3,
        display: 'inline-block',
        width: '95%'
      }
    };

    var linkToThread = this.props.data ? "thread/" + this.props.data._id
                                        : null;

    return (
      <Paper style={style} zDepth={1}>

        {this.props.data ? 
          <div>
            <VoteCounter votes={this.props.data.votes}
                          onUpvote={this.props.onUpvote}
                          onDownvote={this.props.onDownvote} />

            <div style={style.content} >

              {this.state.edit ? 
                <EditThreadForm  title={this.props.data.title} 
                                 desc={this.props.data.thread} 
                                 handleEdit={this.props.handleEdit} 
                                 handleToggle={this.toggleEdit} />
                :
                <div> 
                  <div className="title">
                    <Link to={linkToThread}>{this.props.data.title}</Link>     
                  </div>

                  <div style={style.modify} >
                    <button id="editThread" onClick={this.toggleEdit}>Edit</button>
                    <button id="deleteThread" onClick={this.props.handleDelete}>Delete</button>
                  </div>           

                  <div className="desc">
                    <div> {this.props.data.thread} </div>
                  </div>
                </div>
              }
              
              <div className="details">
                <span className="author">Author - {this.props.data.author}</span> |
                <span className="numOfComments">{this.props.data.comments.length} comments</span> |
                <span className="date">Posted {this.props.data.created_at.slice(0, 10)}</span>
              </div>
            </div>
          </div>
          : null
        }
      
      </Paper>
    );
  }

});
  
ThreadPageItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default ThreadPageItem;
