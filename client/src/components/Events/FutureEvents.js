import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
class FutureEvents extends Component{
  constructor(props){
    super(props);
    this.state={
      eventData:[
        {title:'April 28th', post:'CUNY Hackathon'},
        {title:'May 4th', post: 'Job Fair at Crowed'},
        {title:'June 2nd', post:'Job Fair at NYU'} 
       ] 
      } 
     };

  render(){
    return(
      <Card>
        <CardHeader title="Events" style={{textAlign:'center'}} />
        <CardText>
          {this.state.eventData ? this.state.eventData.map(function(events, idx){
            return(
              <div key={idx}>
                <h5>{events.title}</h5>
                <div>{events.post.slice(0,50)}</div>
              </div>
            );
          }):null}
        </CardText>
      </Card>
    );
  }
}
export default FutureEvents;
