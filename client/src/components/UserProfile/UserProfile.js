import React,{ Component } from 'react';
import './UserProfile.css';


function UserProfile(props){
        return(
          <div className="card blue-grey darken-1 col m3">
            <div className="card-content white-text">
                <span className="card-title">{props.role}</span>
                <div className="information">
                    <p>{props.company}</p>
                    <p>{props.status}</p>
                </div>
            </div>
          </div>  
        );
}

UserProfile.propTypes ={
 role: React.PropTypes.string.isRequired,
 company: React.PropTypes.string.isRequired,
 status: React.PropTypes.string.isRequired   
};

export default UserProfile;