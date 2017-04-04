import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Auth from '../../modules/Auth';
import axios from 'axios';
import React, { Component } from 'react';


/*Need to clean this code before April begins */
class AppLogForm extends Component{
    constructor(props){
        super(props);
        this.state={
            company:'',
            role:'',
            status:''
        };
    
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleCompany=this.handleCompany.bind(this);
    this.handleRole=this.handleRole.bind(this);
    this.handleStatus=this.handleStatus.bind(this);
    };
    //data is the information that is being passed
    handleCompany(event){
        this.setState({company:event.target.value});
    }
    handleRole(event){
        this.setState({role:event.target.value});
    }
    handleStatus(event){
        this.setState({status:event.target.value});
    }
    handleSubmit(event){
        var data = {company:this.state.company,role:this.state.role,status:this.state.status};
        axios.post('/applications/create',data)
        .then((res) => {console.log('the res is, ', res)})
        .catch(err => {console.log(err);});
        event.preventDefault(); 
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
                <TextField hintText="Company" value={this.state.company} onChange={this.handleCompany} style={{width:80,margin:10}}/>
                <TextField hintText="Role" value={this.state.role} onChange={this.handleRole} style={{width:80,margin:10}}/>
                <TextField hintText="Status" value={this.state.status} onChange={this.handleStatus} style={{width:80,margin:10}}/>
                <br />
                <FlatButton label="Submit" type="submit" />
            </form>
        );
    }

}

export default AppLogForm; 