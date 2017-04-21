import Auth from '../../modules/Auth';
import axios from 'axios';
import {Card, CardTitle, CardText}  from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React, {Component,PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper'; 

//need to fix the rendering of editing and deleting comments.


export default class AnswerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originalAnswerData: this.props.answer,
            editopen:false,
            deleteopen:false,
            youranswer: this.props.answer.answerText,
            displayAnswer: this.props.answer.answerText
        }
        
        this.handleEditInterviewOpen = this.handleEditInterviewOpen.bind(this);
        this.handleDeleteInterviewOpen = this.handleDeleteInterviewOpen.bind(this);
        
        this.handleEditInterviewClose = this.handleEditInterviewClose.bind(this);
        this.handleDeleteInterviewClose = this.handleDeleteInterviewClose.bind(this);

        this.handleAnswer = this.handleAnswer.bind(this);

        this.editInterview = this.editInterview.bind(this);
        this.deleteInterview = this.deleteInterview.bind(this);
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
    


    editInterview() {
        this.setState({editopen: false});
        const editURL = '/interviewQuestions/' + this.props.question + '/answers/' + this.props.answer._id + '/edit';
        axios.post(editURL, {answerText: this.state.youranswer}, {headers: {authorization: 'bearer ' + Auth.getToken()} })
        .then((res) => {
            console.log('sucess, edited', res);
            this.setState({originalAnswerData: res.data});
            this.setState({displayAnswer: this.state.youranswer});
        })
        .catch((err) => {
            console.log(err);
        });
    }


    deleteInterview() {
        this.setState({deleteopen: false});
        const deleteURL = '/interviewQuestions/' + this.props.question + '/answers/' + this.props.answer._id + '/remove';
        axios.delete(deleteURL, {headers: {authorization: 'bearer ' + Auth.getToken()} })
        .then(res => {
            console.log('sucess, deleted.', res);
            this.setState({originalAnswerData: res.data});
        })
        .catch((err) => {
            console.log(err);
        });
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
                {this.props.answer ?
                <Card>
                    <CardTitle title={this.state.originalAnswerData.author} subtitle= {this.state.originalAnswerData.created_at.slice(0,10)} />
                    <CardText>
                        {this.state.displayAnswer}
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

                : null }

            </div>

        );
    }
}

AnswerList.propTypes = {
    answer: React.PropTypes.object.isRequired,
    question: React.PropTypes.string.isRequired,
    router: React.PropTypes.object.isRequired
};