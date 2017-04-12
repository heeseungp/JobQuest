import React, { Component } from 'react';
import {Link} from 'react-router';
import VoteCounter from '../VoteCounter/VoteCounter';
import axios from 'axios';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';

class InterviewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thread: []
        };
    }

    componentDidMount() {
    const url = '/interviewQuestions/' + this.props.params.id + '/show';
    axios.get(url)
      .then(res => {
        console.log('the response went through', res.data);
        this.setState({thread: res.data});
      });
  }
    

    render() {
        
        const styleDescription = {
            fontSize: '25px'
        }

        return(


            <Card>
                <div className="container" >
                    <br />
                    <div className="title">
                        <h2>{this.state.thread.title}</h2>
                    </div>
                    <div className="topic">
                        <h4>{this.state.thread.topic}</h4>
                    </div>
                </div>

                <CardText>
                    <div className="question">
                        <h3>Description:</h3>
                        <p style={styleDescription}>{this.state.thread.question}</p>
                    </div>
                    <div className="Answers">
                        <h3>Answer:</h3>
                          <p style={styleDescription}>{this.state.thread.originalAnswer}</p>
                    </div>
                </CardText>
            </Card>
        );
    }

}

InterviewPage.propTypes = {
    data: React.PropTypes.object.isRequired
};

export default InterviewPage;