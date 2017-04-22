import React, { PropTypes,Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './InterviewItem.css'
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import {blue300, pink300, purple300, yellow300, orange300, grey300,indigo900} from 'material-ui/styles/colors';


export default class InterviewItem extends Component {
  constructor(props){
    super(props);
    this.subtitle = this.subtitle.bind(this);
  }

  subtitle(){
    var temp = 'submitted at ' + this.props.data.created_at.slice(0, 10) + ' by ' + this.props.data.author;
    return temp;
    
  }

  color() {
    var colorType;
    switch(this.props.data.topic) {
      case 'Software Engineering':
        colorType = blue300;
        break;
      case 'Algorithm':
        colorType = pink300;
        break;
      case 'Database':
        colorType = purple300;
        break;
      case 'Shell':
        colorType = yellow300;
        break;
      case 'System Design':
        colorType = orange300;
        break;
      default:
        colorType = grey300;
        break; 
    }
    return colorType;
  }



  render() {
    // make date contain only MM/DD/YYYY

    var linkToThread = this.props.data ? "interview/" + this.props.data._id : null;

    const stylePaper = {
      minHeight: this.props.showDesc ? 150 : 80,
      width: 1200,
      margin: 10
    }

    const styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };

  

    return (
      <div>        
        <Paper className="interviewItem" style={stylePaper} zDepth={3}>

          <div className="interviewContent">
            <div className="interviewTitle">
              <Link to={linkToThread}>{this.props.data.title}</Link>
            </div>
            
            <div className="interviewTopic">
              <Chip backgroundColor={this.color()} style={styles.chip}>
                {this.props.data.topic}
              </Chip>
            </div>

            <div className="interviewInfo">
              <i>{this.subtitle()}</i>
            </div>

            <div className="interviewQuestion">
              <strong>Question: </strong>{this.props.data.question}
            </div>
          </div>
        </Paper>
      </div>
    );  
  }
}

InterviewItem.propTypes = {
  data: React.PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};