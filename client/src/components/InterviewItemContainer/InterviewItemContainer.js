import { Link, IndexLink } from 'react-router';
import React, { Component } from 'react';
import ThreadItem from '../ThreadItem/ThreadItem';
import InterviewItem from '../InterviewItem/InterviewItem'
import axios from 'axios';
import update from 'immutability-helper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
// import './InterviewItemContainer.css';



class InterviewItemContainer extends Component {
  // has to be switched back to a class Component
  // this container will contain the two methods

  constructor(props){
    super(props);

    this.state = {
      threads: []
    };

    // without these, instances don't have these methods
    this.upvoteCount = this.upvoteCount.bind(this);
    this.downvoteCount = this.downvoteCount.bind(this);
  }

  // should have two methods here where I can update the counts
  upvoteCount(idx) {
    // update the thread's count
    console.log('updating the count na mean');
    const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x+1}}); 
    let copy = this.state.threads.slice();
    copy[idx] = updatedCount;

    this.setState({threads: copy});
  }

  downvoteCount(idx) {
    // update the thread's count
    const updatedCount = update(this.state.threads[idx], {votes: {$apply: (x) => x-1}}); 
    let copy = this.state.threads.slice();
    copy[idx] = updatedCount;

    this.setState({threads: copy});
  }

  componentDidMount() {
    // const url = 'http://rest.learncode.academy/api/am/friends'; 

    const url = '/posts/'; 
    axios.get(url)
      .then(res => {
        console.log(res.data);
        console.log(res.data[0]._id);
        this.setState({threads: res.data})
      });

    // mongo jobquest --eval "db.dropDatabase()" => to reset DB

     const dummy = {title: 'new stuff brahh', thread: 'Nonsense bahh'};
     axios.post('/posts/', dummy)
     .then((res) => {console.log('the res is, ', res)})
     .catch(err => {
       console.log(err);
     });
  }


  render(){

    const styleCard = {
      left: {
        marginUp: '50px',
        marginLeft: '50px',
        marginRight: '50px'
      },

      right: {
        marginUp: '50px',
        marginRight: '50px',
        marginBottom: '50px' 
      },
    }

    const styleFont = {
      left: {
        fontSize: '40px',
        fontWeight: 'bold'
      },

      description: {
        fontSize: '25px'
      },

      contributor: {
        fontSize: '15px'
      }

    }



    return (
        <GridList cols={12}>
          <GridTile cols={8} rows={50}>
            {/*Threads*/}
            <Card zDepth={2} style={styleCard.left}>
              <CardHeader title="Interview Questions" titleStyle={styleFont.left}/>
              <CardText style={styleFont.description}>
                {this.state.threads ? this.state.threads.map((thread, idx) => {
                                return <InterviewItem key={idx} data={thread} upvote={() => this.upvoteCount(idx)} downvote={() => this.downvoteCount(idx)}/>
                              })
                              : null}
              </CardText>
            </Card>
          </GridTile>

          <GridTile cols={4} rows={50}>

            {/*Button and Description*/}
            <Card zDepth={2} style={styleCard.right}>
              <RaisedButton labelStyle={{fontSize: '25px', fontFamily:'san-serif'}} label="Submit a New Question" primary={true} fullWidth={true}/>
              <CardText 
                style={styleFont.description}>
                <b>Welcome, one and all, to Interview Questions!</b>
                <br />
                <br />
                Here we discuss interview questions in Computer Science, Computer Engineering, Software Engineering, 
                and related fields. Please keep the conversation professional.
                <br />
                </CardText>
            </Card>

            {/*High score*/}
            <Card zDepth={2} style={styleCard.right}>
              <CardText style={styleFont.contributor}>
                <h2>Top Contributors</h2>
                <h3>1. Joseph Park</h3>
                <h3>2. Joseph Park</h3>
                <h3>3. Joseph Park</h3>
                <br />
                <h2>Recent Contributors</h2>
                <h3>1. Joseph Park</h3>
                <h3>2. Joseph Park</h3>
                <h3>3. Joseph Park</h3>
                <br />
                </CardText>
            </Card>
          </GridTile>
        </GridList>

    );
  }

}

InterviewItemContainer.PropTypes = {
  items: React.PropTypes.array.isRequired
  // add two funcs, TODO
};

export default InterviewItemContainer;