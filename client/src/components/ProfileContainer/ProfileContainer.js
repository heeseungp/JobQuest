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
        this.showTable=this.showTable.bind(this);
        //this.modify=this.modify.bind(this)
    };

    form(){
        this.setState({add:true});
    }
    showTable(){
        this.setState({add:false});
    }    
    renderForm(){
        return(
            <Card>
                <CardHeader title="Application Form" />
                <CardText>
                    <AppLogForm />
                </CardText>
            </Card>
        );
    }
    renderRes(){
        return(
            <Paper>
                <h6>Application History</h6>
                <AppLogTable />
                <FlatButton label="Add" onClick={this.form} />
            </Paper>
        );
    }
    render(){
        if(this.state.add){return this.renderForm();}
        else{return this.renderRes();}
    }   
}

export default ProfileContainer;