import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import AppLogTable from '../AppLogHistory/AppLogHistory';
// import FutureEvents from '../Events/FutureEvents'
import AppChart from '../AppChart/AppChart';
/*Need to clean this code before April begins */
class AppLogContainer extends Component{

    render(){
       return(    
               <AppLogTable />
        );
    }   
}

export default AppLogContainer;