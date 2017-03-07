import React from 'react';
import './FutureEvents.css';

var FutureEvents = React.createClass({
  render:function(){
    return(
      <div className="col m3">
        <div className="card blue-grey darken-1 z-depth-4">
          <div className="card-content white-text">
            <span className="card-title">Upcoming Events</span>
            {this.props.data.map(function(events){
              return(
                <Events data={events} />
              );
            })}
          </div>
          <div className="card-action">
            <a href="#">See Calendar</a>
          </div>
        </div>
      </div>
    );
  }
});
var Events = React.createClass({
  render:function() {
    return(
      <div className="content">
        <div className="threadTitle"> <h6>{this.props.data.title}</h6> </div>
        <div> {this.props.data.post.slice(0, 50)} </div>
      </div>
    );
  }
});

export default FutureEvents;
