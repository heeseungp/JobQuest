import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';
import CommentBox from '../CommentBox/CommentBox';
import AnswerBox from '../AnswerBox/AnswerBox';
import RaisedButton from 'material-ui/RaisedButton';
import './InterviewPage.css';
import {purple500, grey50,blue300, pink300, purple300, yellow300, orange300, grey300,indigo900} from 'material-ui/styles/colors';



class InterviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interview: [],
            comment:''
        };

        this.addComment = this.addComment.bind(this);
    }

    componentDidMount() {
        const url = '/interviewQuestions/' + this.props.params.id + '/show';
        axios.get(url)
        .then(res => {
            console.log('the response went through', res.data);
            this.setState({interview: res.data});
        });
    }

  color() {
    var colorType;
    switch(this.state.interview.topic) {
      case 'Software Engineering':
        colorType = blue300;
        break;
      case 'Algorithm':
        colorType = pink300;
        break;
      case 'Database':
        colorType = purple300;
        break;
      case 'Shell':
        colorType = yellow300;
        break;
      case 'System Design':
        colorType = orange300;
        break;
      default:
        colorType = grey300;
        break; 
    }
    return colorType;
  }

  subtitle(){
    var temp = 'submitted at ' + this.state.interview.created_at + ' by ' + this.state.interview.author;
    return temp;
  }

//   handleComment(event) {
//       this.setState({comment: event.target.value});
//   }

//   handleSubmit(event) {
//     var newComment = {answer: this.state.comment, QuestionId: this.props.params.id};
//     // create a new thread on db

//     if(this.state.comment == ''){
//       alert('Comment field is required');
//     }

//     const url = '/interviewQuestions/' + this.props.params.id + '/answers/create';
//     axios.post(url, newComment)
//     .then((res) => {
//       // no way to update the UI here, need to rework the app architecture

//           console.log("HELLO" + this.props.params.id);

//       console.log('success', res);

//       // make it redirect to the page of the post
//       const replaceURL = '/interviewQuestions/' + this.props.params.id + '/show';

//     //   this.context.router.replace(replaceURL);


//     })
//     .catch((err) => {
//       console.log(err);
//       console.log("hello" + this.props.params.id);
//     });

//     // don't know what this does either
//     event.preventDefault(); 
//   }

    addComment(comment) {
        // might need to do an update on that whole object
        var newComments = this.state.interview.otherAnswers.slice();
        newComments.push({answerText: comment});
        var updated = Object.assign({}, this.state.interview, {otherAnswers: newComments});
        const url = '/interviewQuestions/' + this.props.params.id + '/answers/create';
        axios.post(url, {answerText: comment})
        .then((res) => {
        // no way to update the UI here, need to rework the app architecture
        console.log('success', res);

        this.setState({interview: updated});
        })
        .catch((err) => {
        console.log(err);
        });
    }

    

    render() {
        
        const styleDescription = {
            fontSize: '25px'
        }

        const styles = {
            chip: {
                margin: 'auto', 
                marginTop: '20px'
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap'
            }
        }

        const stylePaper = {
            comment: {
                marginTop: '20px'

            }
        }


        return(

            <div className="container">
                <Paper>
                    <div className="titlee">
                        {this.state.interview.title}                    
                    </div>

                    <div className="info">
                        {this.subtitle()}                
                    </div>

                    <div className="topic">
                        <Chip backgroundColor={this.color()} style={styles.chip}>
                            {this.state.interview.topic}                                       
                        </Chip>
                    </div>

                    <div className="question">
                        <strong>Question: </strong> {this.state.interview.question}                
                    </div>

                    <div className="answer">
                        <strong>Answer: </strong> {this.state.interview.originalAnswer}                
                    </div>
                </Paper>
                    
                <Paper style={stylePaper.comment}>
                    <div className="comment">
                        <CommentBox comments={this.state.interview.otherAnswers} onSubmit={this.addComment} />
                    </div>
                </Paper>


            </div>


       );
    }

}

InterviewPage.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default InterviewPage;