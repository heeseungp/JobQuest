import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {VictoryPie} from 'victory';

class AppChart extends Component{
    render(){
        return(
            <Card>
                <CardHeader title="Application Chart" style={{textAlign:'center'}} />
                <CardText>
                    <VictoryPie />
                </CardText>
            </Card>
        );
    }
}

export default AppChart;