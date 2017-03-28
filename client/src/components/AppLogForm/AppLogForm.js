import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import React, { Component } from 'react';

class AppLogForm extends Component{
    constructor(props){
        super(props);
        this.state={
            company:'',
            role:'',
            status:''
        };
    
    this._create=this._create.bind(this);
    this._onSubmit=this._onSubmit.bind(this);
    this._onChange=this._onChange.bind(this);

    };
    //data is the information that is being passed
    _create(data){
        axios.post('/applications/create',data)
        .then((res) => {console.log('the res is, ', res)})
        .catch(err => {console.log(err);}); 
    }
    _onSubmit(e){
       e.preventDefault();
       //save the current information from the form
       var dateCreated=this.state.created_at;
       var companyName=this.state.company;
       var jobRole=this.state.role;
       var currentStatus=this.state.status;
       //change the states after the information is saved
       this.props.submitNewForm({
           created_at:dateCreated,
           company:companyName,
           role:jobRole,
           status:currentStatus
       })
       this.setState({
           company:'',
           role:'',
           status:''
       })
    }
    //trying to understand what this is doing
    _onChange(e){
        var object={};
        object[e.target.name]=$.trim(e.target.value);
        this.setState(object);
    }
    render(){
        return(
            <form onSubmit={this._onSubmit}>
                <TextField hintText="Company"onChange={this._onChange}/>
                <br />
                <TextField hintText="Role" onChange={this._onChange}/>
                <br />
                <TextField hintText="Status" onChange={this._onChange}/>
                <br />
                <FlatButton label="Submit" />
            </form>
        );
    }

}




