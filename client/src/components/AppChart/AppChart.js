import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import axios from 'axios';
import {VictoryPie, VictoryTheme} from 'victory';

class AppChart extends Component{
    constructor(props){
        super(props);
        this.state={
            applications:[],
            stats:{}
        }
    }

    update(){
        const url='/applications/';
        axios.get(url)
        .then(res => {
            var object ={
                applied:0,
                interview:0,
                phone:0,
                accepted:0,
                rejected:0
            }
            for(let i=0; i< res.data.length;i++){  
                object[res.data[i].status.toLowerCase()]++;
             }
            this.setState({applications: res.data, stats:object});
            this.forceUpdate();
        });
    };

    componentDidMount(){
        const url='/applications/';
        axios.get(url)
        .then(res => {
            var object ={
                applied:0,
                interview:0,
                phone:0,
                accepted:0,
                rejected:0
            }
            for(let i=0; i< res.data.length;i++){  
                object[res.data[i].status.toLowerCase()]++;
             }
            this.setState({applications: res.data, stats:object});

        });  
    };
    render(){
       //create an object to add count the number of status it has
       console.log(this.state.stats);
        return(
            <Card>
                <CardHeader title="Application Chart" style={{textAlign:'center'}} />
                <CardText>
                    <VictoryPie 
                        data={[
                            {x:'applied', y:this.state.stats.applied},
                            {x:'phone', y:this.state.stats.phone},
                            {x:'accepted', y:this.state.stats.accepted},
                            {x:'rejected', y:this.state.stats.rejected}
                        ]}
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