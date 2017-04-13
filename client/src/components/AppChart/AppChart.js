import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {VictoryPie, VictoryTheme} from 'victory';

class AppChart extends Component{
    render(){
        return(
            <Card>
                <CardHeader title="Application Chart" style={{textAlign:'center'}} />
                <CardText>
                    <VictoryPie 
                        width={400}
                        height={300}
                        theme={VictoryTheme.material}
                    />
                </CardText>
            </Card>
        );
    }
}

export default AppChart;