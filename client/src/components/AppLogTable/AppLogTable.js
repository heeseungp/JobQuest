import React, { Component } from 'react';
import {Table, TableBody,TableRow, TableHeader, TableHeaderColumn,TableFooter} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import UserProfile from '../UserProfile/UserProfile';
import AppLogForm from '../AppLogForm/AppLogForm';
/*Need to clean this code before April begins */
class AppLogTable extends Component{
    constructor(props){
        super(props);
        this.state={
            applications:[],
            //this is for the material-ui
            displaySelectAll: false,
            adjustForCheckbox: true,
            selected:''
        };
       this.handleRowSelection=this.handleRowSelection.bind(this); 
       this.handleDelete=this.handleDelete.bind(this);
    };
    componentDidMount(){
        const url='/applications/';
        axios.get(url)
        .then(res => {
            this.setState({applications: res.data});
        });
    }
    handleRowSelection(key){
        console.log('why you here.');
        let currentKey = this.state.applications[key]._id;
        this.setState({
            selected: currentKey
        });
        //  console.log(currentKey);
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

        //to '/applications/:ApplicationId/delete
    render(){
        return(
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
                   <TableFooter>
                       <AppLogForm/>
                       <FlatButton label="Delete" onClick={this.handleDelete} />
                    </TableFooter>
            </Table>
        );
    }
}
export default AppLogTable;