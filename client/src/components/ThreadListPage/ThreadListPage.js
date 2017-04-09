import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import axios from 'axios';

// import './ThreadListPage.css';


const ThreadListPage = React.createClass({

  getInitialState(){
    return {
      threads: undefined
    }
  },

  upvoteThread(id){
    console.log('upvote has been triggered', id);
  },

  componentDidMount(){
    // populate threads data
    
    const url = '/posts/';
    axios.get(url)
      .then(res => {
        console.log('got the data', res.data);
        this.setState({threads: res.data})
      });
  },

  render: function(){
    const style = {
      display: 'inline-block'
    };

    return (
      <div style={style} >

        <ThreadItemContainer threads={this.state.threads}
                             onUpvote={this.upvoteThread} />
        
      </div>
    );
  }
}); 

export default ThreadListPage;
