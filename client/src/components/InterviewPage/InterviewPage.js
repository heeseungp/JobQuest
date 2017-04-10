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

    }

    render() {
        
        const styleDescription = {
            fontSize: '25px'
        }

        return(
            <Card>
                <div className="container" >
                    <br />
                    <div className="question">
                        <h2>Sample Question</h2>
                    </div>
                    <div className="detail">
                        <h4>Sample Detail</h4>
                    </div>
                </div>

                <CardText>
                    <div className="description">
                        <h3>Description:</h3>
                        <p style={styleDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="Answers">
                        <h3>Answer:</h3>
                          <p style={styleDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
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