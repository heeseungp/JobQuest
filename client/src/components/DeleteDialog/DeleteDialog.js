import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class DeleteDialog extends React.Component {

  constructor(props){
    super(props);

    this.state = {
     open:false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit() {
        this.props.onDelete({commentid:this.props.commentId});
        this.setState({open: false});
    }

  render() {
    const actions = [
      <FlatButton
        label="No"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <FlatButton labelStyle={{color:'#8f1bc1'}} label="Delete" onTouchTap={this.handleOpen} />
        <Dialog
          title="Delete Comment"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        Are you sure you want to delete this comment?
        </Dialog>
      </div>
    );
  }
}