import React, { Component } from 'react';
import {Table, TableBody,TableRow, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UserProfile from '../UserProfile/UserProfile';
/*Need to clean this code before April begins */
class AppLogTable extends Component{
    constructor(props){
        super(props);
        this.state={
            applications:[],
            //this is for the material-ui
            
            displaySelectAll: false,
            adjustForCheckbox: true,
            selected:'',
            
            //states are for post
            company: '',
            role:'',
            status:''
        };
       this.handleRowSelection=this.handleRowSelection.bind(this); 
       this.handleDelete=this.handleDelete.bind(this);


       //states for post and update
       this.handleCompany=this.handleCompany.bind(this);
       this.handleRole=this.handleRole.bind(this);
       this.handleStatus=this.handleStatus.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
       //this.handleModify=this.handleModify.bind(this);
    };
    componentDidMount(){
        const url='/applications/';
        axios.get(url)
        .then(res => {
            this.setState({applications: res.data});
        });
    }
    handleRowSelection(key){
        this.setState({
            selected: this.state.applications[key]._id
        });
    }
    handleDelete(){
        var idx = -1;
        for(let i=0; i < this.state.applications; i++){
            if(this.state.applications[i]._id == this.state.selected){
                idx=i;
            }
        }
        var copy = this.state.applications.slice();
        copy.splice(idx,1);

        const url='/applications/' + this.state.selected + '/remove';

        axios.delete(url)
        .then(res => {
            this.setState({applications: copy, selected: ''})
        });
    }
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
        //figure out how to copy applications and insert new post
        var copy = this.state.applications.slice();
        axios.post('/applications/create',data)
        .then((res) => {
            copy.push(res.data); 
            this.setState({applications: copy})})
        .catch(err => {console.log(err);});
        event.preventDefault(); 
    }   
    // handleModify(){

    // }

    render(){
        return(
         <div>
            <Table onRowSelection={this.handleRowSelection} multiSelectable={this.state.multiSelectable}>
                <TableHeader displaySelectAll={this.state.displaySelectAll} adjustForCheckbox={this.state.adjustForCheckbox}>
                    <TableRow>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Company</TableHeaderColumn>
                        <TableHeaderColumn>Role</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                    <TableBody>
                    {this.state.applications ?  this.state.applications.map((application, idx) => {
                            return <UserProfile key={idx} created_at={application.created_at.slice(0,10)}
                                                company={application.company}
                                                role={application.role}
                                                status={application.status}
                                                />
                        })
                            : null}
                   </TableBody>
            </Table>
            <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
                <TextField 
                    hintText="Company"
                    value={this.state.company} 
                    onChange={this.handleCompany} 
                    style={{width:80,margin:10}}/>
                <TextField 
                    hintText="Role" 
                    value={this.state.role} 
                    onChange={this.handleRole} 
                    style={{width:80,margin:10}}/>
                <TextField 
                    hintText="Status" 
                    value={this.state.status} 
                    onChange={this.handleStatus} 
                    style={{width:80,margin:10}}/>
                <br />
                <FlatButton label="Submit" type="submit" />
                <FlatButton label="Delete" onClick={this.handleDelete} />
                <FlatButton label="Modify" />
            </form>
        </div>        
        );
    }
}
export default AppLogTable;