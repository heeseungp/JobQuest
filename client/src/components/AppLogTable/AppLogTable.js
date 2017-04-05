import React, { Component } from 'react';
import {Table, TableBody,TableRow,TableRowColumn, TableHeader, TableHeaderColumn,TableFooter} from 'material-ui/Table';
import axios from 'axios';
import Auth from '../../modules/Auth';
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
        };
    };
    componentDidMount(){
        const url='/applications/';
        axios.get(url)
        .then(res => {
            this.setState({applications: res.data});
        });
    }
 
        //to '/applications/:Applicat
    render(){
        return(
            <Table>
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
                            console.log(application);
                            console.log(idx);
                            return <UserProfile key={idx} created_at={application.created_at.slice(0,10)}
                                                company={application.company}
                                                role={application.role}
                                                status={application.status}
                                                />
                        })
                            : null}
                   </TableBody>
            </Table>
        );
    }
}
export default AppLogTable;