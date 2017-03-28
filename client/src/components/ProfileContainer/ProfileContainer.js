import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import AppLogForm from '../AppLogForm/AppLogForm';
import AppLogTable from '../AppLogTable/AppLogTable';


class ProfileContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            add: false,
        };
        this.form=this.form.bind(this); 
        this.cancel=this.cancel.bind(this);
    };

    
    form(){
        this.setState({add:true});
    }
    cancel(){
        this.setState({add:false});
    }
    
    renderForm(){
        return (
            <Card>
                <CardHeader title="Application "/>
                <CardText>
                    <AppLogForm />
                </CardText>
            </Card>             
        );
    }
    renderRes(){
        return (
            <Card>
                <CardHeader title="Application History" style={{textAlign: 'center'}} />
                <CardText>
                    <AppLogTable />
                </CardText>
                <CardActions>
                    <FlatButton label="Add" onClick={this.form} />
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