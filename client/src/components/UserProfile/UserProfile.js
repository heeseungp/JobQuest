import React,{ Component } from 'react';
import axios from 'axios';
import './UserProfile.css';

  function UserProfile(props){
        return(
            <div>
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