
import React, { Component } from 'react';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import axios from 'axios';
import update from 'immutability-helper';
import './Reddit.css';

class Reddit extends Component {
  // has to be switched back to a class Component
  // this container will contain the two methods

  constructor(props){
    super(props);

    this.state = {
      redditposts: [],
    };

  }

  getPosts(value) {
    const url = '/reddit/cscareerquestions/'; 
    axios.get(url + value)
      .then(res => {
        console.log(res.data);
        this.setState({redditposts: res.data})
      });
  }

  componentDidMount() {
    this.getPosts('hot');
  }

  render(){

    //wish there was a way to make these auto-wrap around the contents...
    const style = {
      width: 580,
      margin: 20,
      padding: 10
    };

    return (
       <Paper style={style} zDepth={1}>
         <h2>Hot posts from <a href="https://reddit.com/r/cscareerquestions" target="_blank">/r/cscareerquestions</a></h2>
        
        {this.state.redditposts ? 
          this.state.redditposts.map((redditpost, idx) => {
            return (
              <div className="post">
                <a href={redditpost.link} className="link" key={idx} title={redditpost.title} target="_blank">
                  <p className="truncate">{redditpost.title}</p>
                </a>
                <div className="info">
                  <span>Votes: {redditpost.votes} | </span>
                  <span>Posted: {redditpost.created_at.substring(0,10)}</span>
                </div>
              </div>
            ); 
          })
          : null}
      </Paper>
    );
  }

}

Reddit.PropTypes = {
  items: React.PropTypes.array.isRequired
};

export default Reddit;