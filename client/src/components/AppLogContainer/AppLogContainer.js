import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import AppLogTable from '../AppLogHistory/AppLogHistory';
import FutureEvents from '../Events/FutureEvents'

/*Need to clean this code before April begins */
class AppLogContainer extends Component{

    render(){
       return(
        <GridList cellHeight={'auto'}>
           <GridTile> 
               <AppLogTable />
           </GridTile>
           <GridTile>
               <FutureEvents />
            </GridTile>
        </GridList>
        );
    }   
}

export default AppLogContainer;