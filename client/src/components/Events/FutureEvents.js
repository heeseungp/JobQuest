
import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


class FutureEvents extends Component{
  
  constructor(props){
    super(props);
    
    this.state={
      eventData:[
        {title:'April 27th', post:'CUNYCodes Demo Night'},
        {title:'April 28th', post:'CUNY Hackathon'},
        {title:'May 4th', post: 'Job Fair at Crowed'},
        {title:'June 2nd', post:'Job Fair at NYU'},
       ] 
    } 
  };

  render(){

    const style = {
      card: {
        minHeight: 180,
        padding: 5,
        margin: 10
      },
      title: {
        textAlign: 'center',
        fontFamily: 'Luciana Console',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 10,
        textDecoration: 'underline',
        color: 'purple'
      },
      list: {
        display: 'inline-block',
        date: {
          display: 'inline-block',
          fontSize: 25,
          fontWeight: 600
        },
        padding: 5
      }
    };

    return(
      <Card style={style.card} >
        <div style={style.title} >Upcoming Tech Events</div>
        
        <div>
          <ul>
          {this.state.eventData ? this.state.eventData.map(function(events, idx){
            return(
              <li key={idx} >
                <div style={style.list.date}>{events.title}</div> | <div style={style.list}>{events.post.slice(0,50)}</div>
              </li>
            );
          }):null}
          </ul>
        </div>
      </Card>
    );
  }
}

export default FutureEvents;
