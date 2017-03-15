import React,{ Component } from 'react';
import UserProfile from '../UserProfile/UserProfile';
import axios from 'axios';
import update from 'immutability-helper';


class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            info:[]
        };
        this.created_at = '03/14/2017';
        this.company = 'IBM';
        this.role = 'Software Engineer';
        this.status = 'Phone Interview';
    }
    componentDidMount(){
        const url = '/applications/'; 
        axios.get(url)
        .then(res => {
            console.log('something happening');
            console.log('check me out');
            //this.created_at = res.data.created_at;
            //this.company = res.data.company;
            //this.role = res.data.role;
            //this.status = res.data.status;
      });
        const dummy = {company: 'IBM', role: 'Software Engineer', status:'Phone Interview'};
        axios.post('/applications/', dummy)
        .then((res) => {console.log('the res is, ', res)})
            .catch(err => {
            console.log(err);
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