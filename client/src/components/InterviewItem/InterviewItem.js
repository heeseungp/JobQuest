
// now create a lists of threads
import React, { Component } from 'react';
import VoteCounter from '../VoteCounter/VoteCounter';
import axios from 'axios';
import './InterviewItem.css'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class InterviewItem extends Component {
  constructor(props){
    super(props);

    // still dont get this binding nonsense
    // supposedly binds the instance
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
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

  render() {
    // make date contain only MM/DD/YYYY

    const styleCardHeader = {
      title: {
        fontSize: '22px',
        fontWeight: 'bold'
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

      //title can be the title of the question, subtitle can be the contributer with dates
      
      <Card>
        <CardHeader
          title="Example Title"
          titleStyle={styleCardHeader.title}
          subtitle="Example Subtitle"
          actAsExpander={true}
          showExpandableButton={true}/>

        <CardActions>
          <FlatButton label="Comments"/>
        </CardActions>

        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>


    );
  }
}

InterviewItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default InterviewItem;
