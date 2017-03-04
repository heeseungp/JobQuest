import React from 'react';
import './FutureEvents.css';

var FutureEvents = React.createClass({
  render:function(){
    return(
      <div className="col m3">
        <div className="card blue-grey darken-1 z-depth-4">
          <div className="card-content white-text">
            <span className="card-title">Upcoming Events</span>
            <p>Mar 16: Hackathon at CUNY Hunter at 5pm</p>
            <p>May 5th: Job Fair at NYU</p>
            <p>May 6th: Job Fair at WeWorks NoMad</p>
          </div>
          <div className="card-action">
            <a href="#">See Calendar</a>
          </div>
        </div>
      </div>
    );
  }
});

export default FutureEvents;
