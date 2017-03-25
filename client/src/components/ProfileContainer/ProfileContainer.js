import React, { Component } from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import {GridList, GridTile} from 'material-ui/GridList';
import UserProfile from '../UserProfile/UserProfile';
import axios from "axios";


class ProfileContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            applications: [],
            displaySelectAll: false,
            adjustForCheckbox: false,
            add: false,
            deleteAttempt: false,
            delete: false
        };
        this.form =this.form.bind(this);
        this.cancel =this.cancel.bind(this);
        this.remove =this.remove.bind(this);
    };

    
    form(){
        this.setState({add:true});
    }
    cancel(){
        this.setState({add:false});
    }
    remove(){
        this.setState({deleteAttempt:true});

    }
    componentDidMount() {
        const url = '/applications/'; 
        axios.get(url)
        .then(res => {
            this.setState({applications: res.data});
        });
    }
    renderForm(){
        return(
            <Card>
                <CardHeader title="Application Form"/>
                <CardText>
                    <TextField hintText="Company" />
                    <br />
                    <TextField hintText="Role" />
                    <br /> 
                    <TextField hintText="Status" />
                    <br />
                    <TextField hintText="Comment" /> 
                </CardText>
                <CardActions>
                    <FlatButton label="Cancel" onClick={this.cancel} />
                    <FlatButton label="Submit" /> 
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
                <CardHeader title="Application History" style={{textAlign: 'center'}} />
                <CardText>
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
                </CardText>
                <CardActions>
                    <FlatButton label="Add" onClick={this.form} />
                    <FlatButton label="Remove" />
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