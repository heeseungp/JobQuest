import React, { Component } from 'react';
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
            <div className="row">
                <div className="col m7">
                    <div className="card-panel teal">
                        {this.state.applications ? 
                            this.state.applications.map((application, idx) => {
                                console.log(application);
                                console.log(idx);
                                return <UserProfile key={idx} created_at={application.created_at}
                                                    company={application.company}
                                                    role={application.role}
                                                    status={application.status}
                                                    />
                            })
                        : null}
                    </div>
                </div>
            </div>
        );
    }
    
    
}

export default ProfileContainer;