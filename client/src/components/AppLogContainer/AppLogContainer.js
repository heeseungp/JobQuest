import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton';
import AppLogForm from '../AppLogForm/AppLogForm';
import AppLogTable from '../AppLogTable/AppLogTable';

/*Need to clean this code before April begins */
class AppLogContainer extends Component{

    render(){
        return(
        <GridList cellHeight={'auto'}>
           <GridTile> 
               <Card>
                   <CardHeader title="Application History" style={{textAlign:'center'}} />
                   <CardText>
                       <AppLogTable />
                       <AppLogForm />
                    </CardText>
               </Card>
           </GridTile>
           <GridTile>
               <Card>
                   <CardHeader title="Application Chart" style={{textAlign:'center'}} />
                   <CardText>
                       Use ReactD3.js to output pie Chart
                   </CardText>
                </Card>
            </GridTile>
        </GridList>
        );
    }   
}

export default AppLogContainer;