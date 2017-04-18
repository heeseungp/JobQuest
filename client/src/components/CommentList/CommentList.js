
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import marked from 'marked';
import Moment from 'react-moment';
import EditDialog from '../EditDialog/EditDialog';
import DeleteDialog from '../DeleteDialog/DeleteDialog';

class CommentList extends Component {

  render() {
    return (
      <div>
          { this.props.comments ? 
            this.props.comments.map((comment) => (
              <Paper> 
                <div style={{float:'right'}}>
                  <EditDialog commentId={comment._id} comment={comment.text} onEdit={this.props.onEdit} />
                  <DeleteDialog commentId={comment._id} onDelete={this.props.onDelete} />
                </div>
                <p style={{padding: 10, marginBottom:0}}><b>{comment.author} said:</b></p>
                <p style={{padding: 10, margin: 0}}> {comment.text} </p>
                <p style={{fontSize: 12, padding: 10}}><i>Posted on <Moment>{comment.created_at}</Moment></i></p>
              </Paper>
            ))
            : null
          }     
      </div>
    );
  }
}

CommentList.contextTypes = {
  onEdit: React.PropTypes.func.isRequired
};

export default CommentList;


