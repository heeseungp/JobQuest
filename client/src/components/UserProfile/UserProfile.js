import React,{ Component } from 'react';
import './UserProfile.css';


function UserProfile(props){
        return(
         <div className="col m7">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">Applications </span>
                <table className="centered">
                    <thead>
                        <tr>
                            <th data-field="Created-at">Date</th>
                            <th data-field="Company">Company</th>
                            <th data-field="Role">Role</th>
                            <th data-field="Status">Status</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>{props.created_at}</td>
                                <td>{props.company}</td>
                                <td>{props.role}</td>
                                <td>{props.status}</td>
                            </tr>
                        </tbody>
                </table>
                <div className="card-action">
                    <a href="#">Update</a>
                </div>
            </div>
          </div>
        </div>  
        );
}

UserProfile.propTypes ={
 created_at: React.PropTypes.number.isRequired,
 role: React.PropTypes.string.isRequired,
 company: React.PropTypes.string.isRequired,
 status: React.PropTypes.string.isRequired   
};

export default UserProfile;