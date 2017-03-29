import {Card, CardHeader, CardActions, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';

var FutureEvents = React.createClass({
  render:function(){
    return(
      <Card> 
        <CardHeader title="Upcoming Events" />
        <CardText>
          {this.props.data ? this.props.data.map(function(events){
            return (
                <Events data={events} />
                );
            })
            : null}
          </CardText>
      </Card>
    );
  }
});
var Events = React.createClass({
  render:function() {
    return(
      <div>
        <h6>{this.props.data.title}</h6>
        <div> {this.props.data.post.slice(0, 50)} </div>
      </div>
    );
  }
});

export default FutureEvents;
