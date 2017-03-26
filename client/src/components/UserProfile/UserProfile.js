import React,{ Component } from 'react';
import axios from 'axios';
import './UserProfile.css';

function UserProfile(props){
        return(
            <tbody>
                <tr>
                    <td>{props.created_at}</td>
                    <td>{props.company}</td>
                    <td>{props.role}</td>
                    <td>{props.status}</td>
                </tr>
            </tbody>
        );
    }

UserProfile.propTypes ={
 created_at: React.PropTypes.number.isRequired,
 role: React.PropTypes.string.isRequired,
 company: React.PropTypes.string.isRequired,
 status: React.PropTypes.string.isRequired   
};

export default UserProfile;