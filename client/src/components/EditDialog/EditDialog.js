import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class EditDialog extends React.Component {

  constructor(props){
    super(props);

    this.state = {
     open:false,
      text: this.props.comment
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleChange(e){
        this.setState({text: e.target.value});
    }

    handleSubmit() {
        this.props.onEdit({comment:this.state.text, commentid:this.props.commentId});
        this.setState({open: false});
    }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <FlatButton labelStyle={{color:'#8f1bc1'}} label="Edit" onTouchTap={this.handleOpen} />
        <Dialog
          title="Edit Comment"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
        <textarea rows="5" cols="50"
               onChange={this.handleChange} value={this.state.text} />
        </Dialog>
      </div>
    );
  }
}