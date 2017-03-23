import React, { Component } from 'react';
import './ProfileContainer.css'
import UserProfile from '../UserProfile/UserProfile';

import axios from "axios";

class ProfileContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            applications: []
        };
    };

    componentDidMount() {
    // const url = 'http://rest.learncode.academy/api/am/friends'; 

        const url = '/applications/'; 
        axios.get(url)
        .then(res => {
            this.setState({applications: res.data});
            //this.setState({threads: res.data})
        });
    }

    render(){
        console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVV')
        console.log(this.state.applications);
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA')
        return(
            <div className="col m8">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Applications</span>
                            <table className="centered">
                                <thead>
                                    <tr>
                                        <th data-field="Created-at">Date</th>
                                        <th data-field="Company">Company</th>
                                        <th data-field="Role">Role</th>
                                        <th data-field="Status">Status</th>
                                    </tr>
                                </thead>
                                {this.state.applications ? 
                                    this.state.applications.map((application, idx) => {
                                        console.log(application);
                                        console.log(idx);
                                        return <UserProfile key={idx} created_at={application.created_at.slice(0,10)}
                                                            company={application.company}
                                                            role={application.role}
                                                            status={application.status}
                                                            />
                                    })
                                : null}
                            </table>
                    </div>
                </div>
            </div>
        );
    }
    
    
}

export default ProfileContainer;