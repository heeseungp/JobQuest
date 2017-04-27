import React, { Component } from 'react';
import {Table, TableBody,TableRow, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Card,CardHeader,CardText, CardTitle} from 'material-ui/Card';
import {GridList,GridTile} from 'material-ui/GridList';
import {VictoryPie, VictoryTheme} from 'victory';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import UserProfile from '../UserProfile/UserProfile';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import AppChart from '../AppChart/AppChart';
import Moment from 'react-moment';
import Paper from 'material-ui/Paper';

/*Need to clean this code before April begins */
class AppLogTable extends Component{
    constructor(props){
        super(props);
        this.state={
            applications:[],
            //this is for the material-ui
            
            displaySelectAll: false,
            adjustForCheckbox: true,
            selectId:'',
            selectAll:'',
            //states are for post
            company:'',
            role:'',
            status:'applied',
            //state for edit 
            edit:false,
            stats:{},
            emptyRole:'',
            emptyCompany:''
        };
       this.handleRowSelection=this.handleRowSelection.bind(this); 
       this.handleDelete=this.handleDelete.bind(this);

       //functions to post 
       this.handleCompany=this.handleCompany.bind(this);
       this.handleRole=this.handleRole.bind(this);
       this.handleStatus=this.handleStatus.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);

       //function to edit, BEWARE THIS CAN THROW AN ERROR IF NOT COMPLETE
       this.handleModify=this.handleModify.bind(this);
    };
    //states that are defined to set up post http request
    handleCompany(event){
        this.setState({company:event.target.value});
        event.target.value ? this.setState({errorCompany:''}) : null;
    }
    handleRole(event){
        this.setState({role:event.target.value});
        event.target.value ? this.setState({errorRole:''}) : null;
    }
    handleStatus(event, index, value){this.setState({status:value});}
   
    //state defined to handle edit  
    handleModify(){
        //PROTOTYPING 
        console.log(this.state.selectId);
        if(this.state.selectId){
            console.log('edit is true now');
            this.setState({
                edit:true,
                 company:this.state.selectAll.company,
                 role:this.state.selectAll.role,
                 status:this.state.selectAll.status
            })
        }
        else{
            console.log('edit is still false');
        }

     }

    //state to handle when checkbox has been clicked
    handleRowSelection(key){
        this.setState({
            selectId: this.state.applications[key]._id,
            selectAll: this.state.applications[key]
        });
    }

    //function for GET request
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
    }

   
    //function for DELETE request
    handleDelete(){
        var idx = -1;
        var object =this.state.stats;
        for(let i=0; i < this.state.applications.length; i++){
            if(this.state.applications[i]._id === this.state.selectId){
                idx=i;
                object[this.state.applications[idx].status]--;
                console.log(this.state.applications[idx].status);
            }
        }
        var copy = this.state.applications.slice();
        copy.splice(idx,1);
        const url='/applications/' + this.state.selectId + '/remove';
        axios.delete(url)
        .then(res => {
            this.setState({applications: copy, selectId: '',stats:object})
        });
    }

    //function for POST request
    handleSubmit(event){
        if(this.state.company && this.state.role)
        {
            var data = {company:this.state.company,role:this.state.role,status:this.state.status};
            var copy = this.state.applications.slice();
            var object = this.state.stats;
            object[this.state.status]++;
            //if edit is false, it will create a new submission else it will edit and submit
            if(!this.state.edit){
                axios.post('/applications/create',data)
                .then((res) => {
                    copy.push(res.data); 
                    this.setState({
                        applications: copy,
                        company:'',
                        role:'',
                        status:'applied',
                        stats:object
                    });
                })
                .catch(err => {console.log(err);});
            }else{
                axios.post('applications/'+this.state.selectId+'/edit',data)
                .then((res) => {
                copy.push(res.data);
                var idx = -1;
                for(let i=0; i < this.state.applications.length; i++){
                    console.log(this.state.applications[i]);
                    if(this.state.applications[i]._id === this.state.selectId){
                        idx=i;
                        object[this.state.applications[i].status]--;
                    }
                }
                copy.splice(idx,1);
                this.setState({
                        selected:undefined,
                        edit:false,
                        applications: copy,
                        company:'',
                        role:'',
                        status:'applied',
                        stats:object
                });
                })
                .catch(err => {console.log(err);});
         }
        }
        this.state.company ? null : this.setState({errorCompany:'Company cannot be empty'});
        this.state.role ? null : this.setState({errorRole:'Role cannot be empty'});
        event.preventDefault();
    }   


    render(){
        //added 
        var piechart = [];
        if(this.state.stats.applied){
            piechart.push({x:'applied', y:this.state.stats.applied});
        }
        if(this.state.stats.phone){
            piechart.push({x:'phone', y:this.state.stats.phone});
        }
        if(this.state.stats.accepted){
            piechart.push({x:'accepted', y:this.state.stats.accepted});
        }
        if(this.state.stats.rejected){
            piechart.push({x:'rejected', y:this.state.stats.rejected});
        }
        if(this.state.stats.interview){
            piechart.push({x:'interview', y:this.state.stats.interview});
        }

        return(
        <GridList cellHeight={'auto'}>
            <GridTile>
                <Card>
                    <CardTitle title="Application History" style={{textAlign:'center'}} />
                    <CardText>
                        <Table 
                            onRowSelection={this.handleRowSelection}
                            multiSelectable={this.state.multiSelectable}>
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
                                        return <UserProfile key={idx} created_at={application.created_at.slice(0,10)}
                                                            company={application.company}
                                                            role={application.role}
                                                            status={application.status}
                                                            />
                                    })
                                        : null}
                            </TableBody>
                        </Table>
                        <form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
                            <TextField 
                                hintText="Company"
                                errorText={this.state.errorCompany}
                                errorStyle={{float: "left"}}
                                value={this.state.company} 
                                onChange={this.handleCompany} 
                                style={{width:160,margin:10}}/>
                            <TextField 
                                hintText="Role" 
                                errorText={this.state.errorRole}
                                errorStyle={{float: "left"}}
                                value={this.state.role} 
                                onChange={this.handleRole} 
                                style={{width:160,margin:10}}/>
                          <DropDownMenu style={{verticalAlign:'bottom',marginBottom:18}} value={this.state.status} onChange={this.handleStatus}>
                              <MenuItem value={'applied'} primaryText="Applied" />
                              <MenuItem value={'interview'} primaryText="Interview" />
                              <MenuItem value={'phone'} primaryText="Phone" />
                              <MenuItem value={'accepted'} primaryText="Accepted" />
                              <MenuItem value={'rejected'} primaryText="Rejected" />
                         </DropDownMenu>
                            <br />
                            <br />
                            <RaisedButton label="Submit" type="submit"/>
                            <RaisedButton label="Delete" onClick={this.handleDelete}/>
                            <RaisedButton label="Modify" onClick={this.handleModify}/>
                        </form>
                    </CardText>
                    </Card>
                </GridTile>
                <GridTile>
                    <Card>
                        <CardTitle title="Application Chart" style={{textAlign:'center'}} />
                        <CardText>
                            {piechart.length != 0 ?
                            <VictoryPie 
                                data={piechart}
                                width={400}
                                height={300}
                                theme={VictoryTheme.material}
                            />
                            :  <Paper
                                zDepth={0}
                                style={{width:550,height:425,backgroundColor:'#EEEEEE'}}> 
                                    <div style={{display: 'flex',flexDirection: 'column',  justifyContent: 'center',alignItems: 'center' , height:'100%'}}>
                                        No applications, please add more using the Application History column
                                    </div>
                                </Paper>}
                        </CardText>
                    </Card>
            </GridTile>  
        </GridList>      
        );
    }
}
export default AppLogTable;