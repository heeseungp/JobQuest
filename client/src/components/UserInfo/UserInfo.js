import React,{ Component } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import axios from 'axios';
import update from 'immutability-helper';


class UserInfo extends Component{
    constructor(props){
        super(props);
        this.created_at = '03/14/2017';
        this.company = 'IBM';
        this.role = 'Software Engineering';
        this.status = 'Active';
    }
    componentDidMount(){
        const url = '/applications/'; 
        axios.get(url)
        .then(res => {
            console.log('something happening');
            console.log('check me out');
            //this.company = res.data.company;
            //this.role = res.data.role;
            //this.status = res.data.status;
      });
    }

    render(){
        return(
            <div>
                <UserProfile created_at={this.created_at} role= {this.role} status = {this.status} company = {this.company} />
            </div>
        )
    }
}
export default UserInfo;