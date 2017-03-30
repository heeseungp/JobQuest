import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import AppLogForm from '../AppLogForm/AppLogForm';
import AppLogTable from '../AppLogTable/AppLogTable';

/*Need to clean this code before April begins */
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
        <GridList cellHeight={'300'}>
            <GridTile >
                <Paper>
                    <h5 style={{textAlign:'center'}}>Application Form</h5>
                    <AppLogForm onClick={this.showTable}/> 
                </Paper>
            </GridTile>
        </GridList>
        );
    }
    renderRes(){
        return(
        <GridList cellHeight={'auto'}>
           <GridTile> 
                <Paper>
                    <h5 style={{textAlign:'center'}}>Application History</h5>
                    <AppLogTable />
                    <FlatButton label="Add" onClick={this.form} />
                </Paper>
            </GridTile>
        </GridList>
        );
    }
    render(){
            if(this.state.add){return this.renderForm();}
            else{return this.renderRes();} 
    }   
}

export default ProfileContainer;