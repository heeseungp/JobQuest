import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import './InterviewPage.css';

import {blue300, pink300, purple300, yellow300, orange300, grey300,indigo900} from 'material-ui/styles/colors';



class InterviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interview: []
        };
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
        };

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
            </div>


       );
    }

}

InterviewPage.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default InterviewPage;