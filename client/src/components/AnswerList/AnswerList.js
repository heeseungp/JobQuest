import {Card, CardTitle, CardText}  from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


class AnswerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editopen:false,
            deleteopen:false,
            youranswer: ''
        }
        
        this.handleEditInterviewOpen = this.handleEditInterviewOpen.bind(this);
        this.handleDeleteInterviewOpen = this.handleDeleteInterviewOpen.bind(this);
        
        this.handleEditInterviewClose = this.handleEditInterviewClose.bind(this);
        this.handleDeleteInterviewClose = this.handleDeleteInterviewClose.bind(this);
    }

    handleEditInterviewOpen() {
        this.setState({editopen: true});
    }

    handleDeleteInterviewOpen() {
        this.setState({deleteopen: true});
    }

    handleEditInterviewClose() {
        this.setState({editopen: false});
    }

    handleDeleteInterviewClose() {
        this.setState({deleteopen: false});
    }

    handleAnswer(e) {
        this.setState({youranswer: e.target.value});
    }



    render() {

        const actions = [
            //answer
                <TextField value={this.state.youranswer} 
                            onChange={this.handleAnswer} 
                            fullWidth={true} 
                            hintText="Answer" 
                            multiLine={true} rows={3}
                            />,                 

                
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.handleEditInterviewClose}
                />,

                <FlatButton
                    label="Submit"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={this.editInterview}
                />,
            ];

            const disactions = [
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.handleDeleteInterviewClose}
                />,

                <FlatButton
                    label="Delete"
                    primary={true}
                    onTouchTap={this.deleteInterview}
                />

            ];

        return( 
            <div>   
                <Card>
                    <CardTitle title={this.props.data.author} subtitle= {this.props.data.created_at.slice(0,10)} 
                                 />
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                        <br />

                        {this.props.data.answerText}

                    </CardText>

                    <div className="menu">
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                            targetOrigin={{horizontal: 'left', vertical: 'top'}}
                        >
                            <MenuItem onClick={this.handleEditInterviewOpen} primaryText="Edit" />
                            <MenuItem onClick={this.handleDeleteInterviewOpen} primaryText="Delete" />
                        </IconMenu>
                    </div>

                    <div>
                        <Dialog
                            title="Edit your Interview Answer"
                            actions={actions}
                            modal={false}
                            open={this.state.editopen}
                            onRequestClose={this.handleEditInterviewClose}>
                        </Dialog>
                    </div>

                    <div>
                        <Dialog
                            actions={disactions}
                            modal={false}
                            open={this.state.deleteopen}
                            onRequestClose={this.handleDeleteInterviewClose}
                            >
                            Are you sure about deleting?
                        </Dialog>
                    </div>
                        
                </Card>
            </div>

        );
    }
}

AnswerList.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default AnswerList;