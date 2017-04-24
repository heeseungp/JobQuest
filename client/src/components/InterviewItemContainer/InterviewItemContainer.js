import './InterviewItemContainer.css'
import axios from 'axios';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import { Link, IndexLink } from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import InterviewItem from '../InterviewItem/InterviewItem'
import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import update from 'immutability-helper';
import {purple500, grey50,blue300, pink300, purple300, yellow300, orange300, grey300, indigo900, grey900, green500} from 'material-ui/styles/colors';


export default class InterviewItemContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      interviewQuestion: [],
      constInterviewQuestion: [],
      usersRanking: []
    };

    this.handleUsersRanking = this.handleUsersRanking.bind(this);
    this.handleTopicAll = this.handleTopicAll.bind(this);
    this.handleTopicAlgorithm = this.handleTopicAlgorithm.bind(this);
    this.handleTopicDatabase = this.handleTopicDatabase.bind(this);
    this.handleTopicShell = this.handleTopicShell.bind(this);
    this.handleTopicSoftwareEngineering = this.handleTopicSoftwareEngineering.bind(this);
    this.handleTopicSystemDesign = this.handleTopicSystemDesign.bind(this);
    this.handleTopicMiscellaneous = this.handleTopicMiscellaneous.bind(this);
}

  componentDidMount() {
    const url = '/interviewQuestions/'; 
    axios.get(url)
      .then(res => {
        this.setState({interviewQuestion: res.data.reverse()});
        this.setState({constInterviewQuestion: res.data.reverse()});
        this.setState({usersRanking :this.handleUsersRanking()});
      });
  }

  handleUsersRanking() {
    // 1. create a hashmap that will have the name of author as the key and the number of times the author appears as the values
    let HashMap = require('hashmap');
    let map = new HashMap();

    let temp = [];

    // 2. iterate through the interview questions and check how many times author's had posted
    for(let i=0; i<this.state.constInterviewQuestion.length; i++){
      if(map.has(this.state.constInterviewQuestion[i].author)){
        map.set(this.state.constInterviewQuestion[i].author, map.get(this.state.constInterviewQuestion[i].author) + 1);
      }
      else {
        map.set(this.state.constInterviewQuestion[i].author, 1);
      }
    }

    // 3. find the biggest value in the hashmap, store it inside the usersRanking then remove. Repeat 2 more times.
    for(let j=0; j<2; j++) {
      if(map.count() < 1) {
        break;
      }
      else {
        temp.push((map.search(Math.max.apply(Math,map.values()))));
        map.remove((map.search(Math.max.apply(Math,map.values()))));
      }
    }
    return temp;
  }

  handleTopicAll() {
    this.setState({interviewQuestion: this.state.constInterviewQuestion});

    console.log(typeof this.state.usersRanking);
  }

  handleTopicAlgorithm() {
    let algorithmList = [];
    for(let i=0;i<this.state.constInterviewQuestion.length;i++) {
      if(this.state.constInterviewQuestion[i].topic === "Algorithm") {
        algorithmList.push(this.state.constInterviewQuestion[i]);
      }
    }
    this.setState({interviewQuestion: algorithmList});
  }

  handleTopicDatabase() {
    let databaseList = [];
    for(let i=0;i<this.state.constInterviewQuestion.length;i++) {
      if(this.state.constInterviewQuestion[i].topic === "Database") {
        databaseList.push(this.state.constInterviewQuestion[i]);
      }
    }
    this.setState({interviewQuestion: databaseList});
  }

  handleTopicShell() {
    let shellList = [];
    for(let i=0;i<this.state.constInterviewQuestion.length;i++) {
      if(this.state.constInterviewQuestion[i].topic === "Shell") {
        shellList.push(this.state.constInterviewQuestion[i]);
      }
    }
    this.setState({interviewQuestion: shellList});
  }

  handleTopicSoftwareEngineering() {
    let softwareengineeringList = [];
    for(let i=0;i<this.state.constInterviewQuestion.length;i++) {
      if(this.state.constInterviewQuestion[i].topic === "Software Engineering") {
        softwareengineeringList.push(this.state.constInterviewQuestion[i]);
      }
    }
    this.setState({interviewQuestion: softwareengineeringList});
  }

  handleTopicSystemDesign() {
    let systemdesignList = [];
    for(let i=0;i<this.state.constInterviewQuestion.length;i++) {
      if(this.state.constInterviewQuestion[i].topic === "System Design") {
        systemdesignList.push(this.state.constInterviewQuestion[i]);
      }
    }
    this.setState({interviewQuestion: systemdesignList});
  }

  handleTopicMiscellaneous() {
    let miscellaneousList = [];
    for(let i=0;i<this.state.constInterviewQuestion.length;i++) {
      if(this.state.constInterviewQuestion[i].topic === "Miscellaneous") {
        miscellaneousList.push(this.state.constInterviewQuestion[i]);
      }
    }
    this.setState({interviewQuestion: miscellaneousList});
  }


  render(){

    const styleCard = {
      left: {
        marginUp: '50px',
        marginLeft: '50px',
        marginRight: '50px'
      },

      title: {
        paddingTop: '35px'
      },

      right: {
        marginUp: '50px',
        marginRight: '50px',
        marginBottom: '50px' 
      },
    }

    const styleFont = {
      left: {
        fontSize: '40px',
        fontWeight: 'bold', 
        color: 'purple',
        marginLeft: '20px'
      },

      description: {
        fontSize: '25px'
      },

      contributor: {
        fontSize: '15px'
      }

    }

    const styleLabel = {
      fontSize: '25px', 
      fontFamily:'<Sans-serif></Sans-serif>',
      color: grey50
    }

    const styleFilter = {
      display: 'flex',
      flexWrap: 'wrap'
    }

    const styleChip = {
      all: {
        backgroundColor: green500,
        width: '160px'
      },

      algorithm: {
        backgroundColor: pink300,
        width: '160px'
      },

      database: {
        backgroundColor: purple300,
        width: '160px'
      },

      shell: {
        backgroundColor: yellow300,
        width: '160px'      
      },

      softwareengineering: {
        backgroundColor: blue300,
        width: '160px'
      },

      systemdesign: {
        backgroundColor: orange300,
        width: '160px'
      },

      miscellaneous: {
        backgroundColor: grey300,
        width: '160px'
      },

      labelStyle: {
        marginRight: 'auto',
        marginLeft: 'auto'
      }
    }



    return (
      <div id="shell">
        <GridList cols={12}>
          <GridTile cols={8} rows={'auto'}>
            <Card zDepth={2} style={styleCard.left}>
              <CardTitle title="Technical Interview Preparation Questions" titleStyle={styleFont.left} style={styleCard.title} />
              <div id="filter">
                <div style={styleFilter}>
                  <div  className="filter_gap">
                    <Chip style={styleChip.all} onTouchTap={this.handleTopicAll} labelColor={grey900} labelStyle={styleChip.labelStyle}>All</Chip>
                  </div>
                  <div className="filter_gap">
                    <Chip style={styleChip.algorithm} onTouchTap={this.handleTopicAlgorithm} labelColor={grey900} labelStyle={styleChip.labelStyle}>Algorithm</Chip>
                  </div>
                  <div className="filter_gap">        
                    <Chip style={styleChip.database} onTouchTap={this.handleTopicDatabase} labelColor={grey900} labelStyle={styleChip.labelStyle}>Database</Chip>
                  </div>
                  <div className="filter_gap">
                    <Chip style={styleChip.shell} onTouchTap={this.handleTopicShell} labelColor={grey900} labelStyle={styleChip.labelStyle}>Shell</Chip>
                  </div>
                  <div className="filter_gap">
                    <Chip style={styleChip.softwareengineering} onTouchTap={this.handleTopicSoftwareEngineering} labelColor={grey900} labelStyle={styleChip.labelStyle}>Software Engineering</Chip>
                  </div>
                  <div className="filter_gap">
                    <Chip style={styleChip.systemdesign} onTouchTap={this.handleTopicSystemDesign} labelColor={grey900} labelStyle={styleChip.labelStyle}>System Design</Chip>
                  </div>
                  <div className="filter_gap">  
                    <Chip style={styleChip.miscellaneous} onTouchTap={this.handleTopicMiscellaneous} labelColor={grey900} labelStyle={styleChip.labelStyle}>Miscellaneous</Chip>
                  </div>
                </div>
              </div>              
              <CardText style={styleFont.description}>
                {this.state.interviewQuestion ? this.state.interviewQuestion.map((question,idx) => {
                  return <InterviewItem key={idx} data={question}/>
                }) : null}
              </CardText>
            </Card>
          </GridTile>

          <GridTile cols={4} rows={'auto'}>
            <Card zDepth={2} style={styleCard.right}>
              <Link to='/postNewInterview'>
                <RaisedButton backgroundColor={purple500} labelStyle={styleLabel} label="Submit a New Question" fullWidth={true}/>
              </Link>
              <CardText 
                style={styleFont.description}>
                <b>Welcome, one and all, to Interview Questions!</b>
                <br />
                <br />
                Here we discuss interview questions in Computer Science, Computer Engineering, Software Engineering, 
                and related fields. Please keep the conversation professional.
                <br />
                </CardText>
            </Card>

            <Card zDepth={2} style={styleCard.right}>
              <CardText style={styleFont.contributor}>
                  <div className="contributor">
                    <div className="contributorHeader">
                      <i className="fa fa-trophy fa-4x" aria-hidden="true"></i>
                      <div id="top3label">
                        <h1>Top 3 Contributors</h1>
                      </div>
                      <i className="fa fa-trophy fa-4x" aria-hidden="true"></i>
                    </div>
                      {this.state.usersRanking[0] ? <h2>1. {this.state.usersRanking[0]} </h2> : <h2>1. -</h2>}
                      {this.state.usersRanking[1] ? <h2>2. {this.state.usersRanking[1]} </h2> : <h2>2. -</h2>}
                      {this.state.usersRanking[2] ? <h2>2. {this.state.usersRanking[2]} </h2> : <h2>2. -</h2>}
                  </div>
                </CardText>
            </Card>
          
          </GridTile>
        </GridList>
      </div>
    );
  }

}