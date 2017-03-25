import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import UserProfile from '../UserProfile/UserProfile';
import axios from "axios";

class ProfileContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            applications: [],
            add: false
        };
        this.edit = this.edit.bind(this);
        this.cancel = this.cancel.bind(this);
    };
    edit(){
        this.setState({add:true});
    }
    cancel(){
        this.setState({add:false});
    }
    componentDidMount() {
        const url = '/applications/'; 
        axios.get(url)
        .then(res => {
            this.setState({applications: res.data});
            //this.setState({threads: res.data})
        });
    }
    renderForm(){
        return(
            <Card>
                <CardHeader title = "Application Form"/>
                <CardText>
                    <TextField hintText = "Company" />
                    <br />
                    <TextField hintText = "Role" />
                    <br /> 
                    <TextField hintText = "Status" />
                </CardText>
                <CardActions>
                    <FlatButton label = "Cancel" onClick={this.cancel} />
                </CardActions>
            </Card>
        );

    }
    renderRes(){
        /*console.log('VVVVVVVVVVVVVVVVVVVVVVVVVVV')
        console.log(this.state.applications);
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAA') */
        return(
           /* <div className="col m8">
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
                    <div className="card-action">
                        <a className="waves-effect waves-light btn" onClick = {this.edit}>Add</a>
                    </div>
                </div>
            </div>
        ); */
        <Card> 
            <CardHeader title= "Application History" />
            <CardText>
                <Table>
                    <TableHeader>
                        <TableRowColumn>Date</TableRowColumn>
                        <TableRowColumn>Company</TableRowColumn>
                        <TableRowColumn>Role</TableRowColumn>
                        <TableRowColumn>Status</TableRowColumn>
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
            </CardText>
            <CardActions>
                <FlatButton label = "Add" onClick = {this.edit} />
            </CardActions>
        </Card>
        );
    }
    render(){
        if(this.state.add){
            return this.renderForm();
        }
        else{
            return this.renderRes();
        }
 
    }
    
    
}

export default ProfileContainer;