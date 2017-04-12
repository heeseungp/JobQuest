import React, { PropTypes,Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import './InterviewItem.css'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import {blue300, indigo900} from 'material-ui/styles/colors';




class InterviewItem extends Component {
  constructor(props){
    super(props);

    this.subtitle = this.subtitle.bind(this);
  }

  subtitle(){
    var temp = 'submitted at ' + this.props.data.created_at + ' by ' + this.props.data.author;
    return temp;
  }



  render() {
    // make date contain only MM/DD/YYYY

    var linkToThread = this.props.data ? "interview/" + this.props.data._id:null;

    const styleCard = {
        item: {
          marginLeft: '20px',   
          marginBottom: '20px', 
          marginRight: '10px',
          width: '95%',
          display: 'inline-block'
      }
    }

    const styleCardHeader = {
      title: {
        margin: '5px',
        fontSize: '30px',
        fontWeight: 'bold'
      },

      subtitle: {
        marginLeft: '6px',
        fontSize: '20px'
      }
    }

    const styleButton = {
      votecounter: {
        marginUp: '50 px'
      }
    }

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
              {/*You can add the coloring below*/}
              <Chip backgroundColor={blue300} style={styles.chip}>
                {this.props.data.topic}
              </Chip>
            </div>

            <div className="interviewInfo">
              {this.subtitle()}
            </div>
          </div>



{/*

          {this.subtitle()}

          {this.props.data.question}*/}

        </Paper>
      </div>



      


    );  
  }
}

InterviewItem.propTypes = {
  data: React.PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default InterviewItem;
