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
            displaySelectAll: false,
            adjustForCheckbox: false,
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
                <CardHeader title = "Application Form" style = {{textAlign: 'center'}}/>
                <CardText style = {{textAlign:'center'}}>
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
        <Card> 
            <CardHeader title= "Application History" style = {{textAlign: 'center'}} />
            <CardText>
                <Table>
                    <TableHeader displaySelectAll = {this.state.displaySelectAll} adjustForCheckbox = {this.state.adjustForCheckbox}>
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