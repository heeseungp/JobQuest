import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import Auth from '../../modules/Auth';
import axios from 'axios';
import Response from '../../modules/Response';
import AlertDialog from '../AlertDialog/AlertDialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';


const ThreadListPage = React.createClass({

  getInitialState(){
    return {
      threads: undefined,
      sortvalue: 'votes'
    }
  },

  interceptError(err){
      Response.setError(err);
      //Force rerendering components
      this.forceUpdate();
      this.forceUpdate();
  },

  upvoteThread(idx){
    // make the call to backend which gives back the updated thread
    // use that to update the state

    console.log('upvote has been triggered', idx);
    axios.post('/vote/up/' + this.state.threads[idx]._id, {},
      { headers: {authorization: 'bearer ' + Auth.getToken()} })
      .then((res) => {
        // update that specific thread
        // console.log(res.data, idx);

        var copy = this.state.threads.slice();
        copy[idx] = res.data;
        this.setState({threads: copy});
      })
      .catch((err) => {
        console.log(err);
        this.interceptError(err);
      })
  },

  downvoteThread(idx){
    console.log('downvote has been triggered', idx);

    axios.post('/vote/down/' + this.state.threads[idx]._id, {},
      { headers: {authorization: 'bearer ' + Auth.getToken()} })
      .then((res) => {
        // update that specific thread
        // console.log(res.data, idx);

        var copy = this.state.threads.slice();
        copy[idx] = res.data;
        this.setState({threads: copy});
      })
      .catch((err) => {
        console.log(err);
        this.interceptError(err);
      })
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

handleChange(event, index, value){
  console.log(value);
  this.setState({sortvalue:value});
},

  render: function(){

    const style = {
      height: 60,
      width:220,
      margin: 20,
    };

    return (
        <div>
          <AlertDialog errorMsg={Response.getError()} open={Response.isErrorSet()} />

          <Paper style={style} zDepth={1}>
          <DropDownMenu style={{display:'inline-block'}} value={this.state.sortvalue} onChange={this.handleChange}>
            <MenuItem value={'votes'} primaryText="Sort By Votes" />
            <MenuItem value={'created_at'} primaryText="Sort By Date" />
            <MenuItem value={'comments'} primaryText="Sort By # Comments" />
            <MenuItem value={'title'} primaryText="Sort By Title" />
        </DropDownMenu>
        </Paper>
          <ThreadItemContainer threads={this.state.threads}
                              onUpvote={this.upvoteThread}
                              onDownvote={this.downvoteThread}
                              sortvalue={this.state.sortvalue} />
        </div>
    );
  }
}); 

export default ThreadListPage;
