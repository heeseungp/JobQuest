
// now create a lists of threads
import React, { Component } from 'react';
import {Link} from 'react-router';
import VoteCounter from '../VoteCounter/VoteCounter';
import axios from 'axios';
import './InterviewItem.css'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';


class InterviewItem extends Component {
  constructor(props){
    super(props);

    // still dont get this binding nonsense
    // supposedly binds the instance
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.subtitle = this.subtitle.bind(this);
  }

  upVote(){
    // first execute the post and then update the UI
    axios.post('/vote/up/' + this.props.data._id, {})
    .then((res) => {
      // console.log(res);
      this.props.upvote();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  downVote(){
    axios.post('/vote/down/' + this.props.data._id, {})
    .then((res) => {
      // console.log(res);
      this.props.downvote();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  subtitle(){
    var temp = 'Created by ' + this.props.data.author  + ' at ' + this.props.data.created_at;
    return temp;
  }



  render() {
    // make date contain only MM/DD/YYYY

    const styleCard = {
        item: {
          marginLeft: '20px',   
          marginBottom: '20px', 
          marginRight: '10px',
          width: '95%',
          display: 'inline-block'
      }
    }

    const styleCardHeader = {
      title: {
        margin: '5px',
        fontSize: '30px',
        fontWeight: 'bold'
      },

      subtitle: {
        marginLeft: '6px',
        fontSize: '20px'
      }
    }

    const styleButton = {
      votecounter: {
        marginUp: '50 px'
      }
    }

  

    return (
      /*<div className="InterviewItem">
        <VoteCounter upvote={this.upVote} 
                     downvote={this.downVote}
                     votes={this.props.data.votes}/>
        
        <div className="threadContent">
          <div className="title">{this.props.data.title}</div>

          <div className="details">
            <span className="author">Author - {this.props.data.author}</span> |
            <span className="numOfComments">{this.props.data.comments.length} comments</span> |
            <span className="date">Posted {this.props.data.created_at.slice(0, 10)}</span>
          </div>
        </div>
      </div>*/


      <div>
        <VoteCounter style={styleButton.votecounter} upvote={this.upVote} downvote={this.downVote} votes={this.props.data.votes} />            
        <Card style={styleCard.item}>
            <CardHeader
              title={this.props.data.title}
              titleStyle={styleCardHeader.title}
              subtitle={this.subtitle()}
              subtitleStyle={styleCardHeader.subtitle}
              actAsExpander={true}
              showExpandableButton={true}/>
              
          <CardActions>
            <FlatButton labelStyle={{fontSize: '15px'}} label="View Solution"/>
            <FlatButton labelStyle={{fontSize: '15px'}} label="Comment"/>
          </CardActions>

          <CardText expandable={true}>
            <p style={{fontSize: '20px'}}>{this.props.data.thread}</p>
          </CardText>
        
        </Card>
      </div>
      


    );
  }
}

InterviewItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default InterviewItem;
