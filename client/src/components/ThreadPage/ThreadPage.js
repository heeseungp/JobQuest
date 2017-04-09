
import React, { PropTypes } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItem from '../ThreadItem/ThreadItem';
import CommentBox from '../CommentBox/CommentBox';
import EditThreadForm from '../EditThreadForm/EditThreadForm';
import Auth from '../../modules/Auth';
import axios from 'axios';

const ThreadPage = React.createClass({

  // this page contains 4 UI components
  // ThreadItem with description | CommentBox | Calendar | List of events
  // this page has access to the ID of the post
  // this will allow us to make the AJAX calls for post data and comments

  getInitialState() {
    return {
      // this whole object gets replaced when the AJAX call goes through
      threadData: ''
    };
  },

  addComment(comment) {
    // might need to do an update on that whole object
    var newComments = this.state.threadData.comments.slice();
    newComments.push({text: comment});

    var updated = Object.assign({}, this.state.threadData, {comments: newComments});

    const url = '/posts/' + this.props.params.id + '/comments/create';
    axios.post(url, {text: comment}, 
               { headers: {authorization: 'bearer ' + Auth.getToken()} })
    .then((res) => {
      // no way to update the UI here, need to rework the app architecture
      console.log('success', res);

      this.setState({threadData: updated});
    })
    .catch((err) => {
      console.log(err);
    });
  },

  editThread(data) {
    // edit the current post data if reques goes through
    axios.post('/posts/' + this.props.params.id + '/edit', data, 
               { headers: {authorization: 'bearer ' + Auth.getToken()} })
    .then((res) => {
      console.log('success', res);
      this.setState({threadData: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  },

  deleteThread(){
    const url = '/posts/' + this.props.params.id + '/remove';
    // send ajax call to update and update state as well
    axios.delete(url, 
               { headers: {authorization: 'bearer ' + Auth.getToken()} })
    .then((res) => {
      console.log('success, deleted', res);
      this.context.router.replace('/forum');
    })
    .catch((err) => {
      console.log(err);
    });
  },

  upvoteThread(){
    // make the call to backend which gives back the updated thread
    // use that to update the state

    axios.post('/vote/up/' + this.state.threadData._id, {},
      { headers: {authorization: 'bearer ' + Auth.getToken()} })
      .then((res) => {
        console.log(res.data);

        this.setState({threadData: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  },

  downvoteThread(){
   
    axios.post('/vote/down/' + this.state.threadData._id, {},
      { headers: {authorization: 'bearer ' + Auth.getToken()} })
      .then((res) => {
        console.log(res.data);

        this.setState({threadData: res.data});
      })
      .catch((err) => {
        console.log(err);
      })
  },

  componentDidMount() {
    const url = '/posts/' + this.props.params.id + '/show';
    axios.get(url)
      .then(res => {
        console.log('the response went through', res.data);
        this.setState({threadData: res.data});
      })
      .catch(err => {
        console.log('the error is, ', err);
        this.context.router.replace('/forum');
      });
  },

  render() {

    const style = {
      width: 850,
      padding: 10,
      margin: 10,
      display: 'inline-block'
    }

    // FIX, render only if there's threadData
    return (
      <Card style={style}>
        <ThreadItem data={this.state.threadData} showDesc={true} 
                    onUpvote={this.upvoteThread} 
                    onDownvote={this.downvoteThread} />
        <CommentBox comments={this.state.threadData.comments} onSubmit={this.addComment} />
        <EditThreadForm title={this.state.threadData.title} 
                        desc={this.state.threadData.thread} 
                        handleEdit={this.editThread} />
        <button onClick={this.deleteThread}>Delete</button>
      </Card>
    )
  }
})

ThreadPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ThreadPage;