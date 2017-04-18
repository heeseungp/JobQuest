import React, { PropTypes } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItem from '../ThreadItem/ThreadItem';
import ThreadPageItem from '../ThreadPageItem/ThreadPageItem';
import CommentBox from '../CommentBox/CommentBox';
import EditThreadForm from '../EditThreadForm/EditThreadForm';
import Auth from '../../modules/Auth';
import axios from 'axios';
import './ThreadPage.css'

const ThreadPage = React.createClass({

  // this page contains 4 UI components
  // ThreadItem with description | CommentBox | Calendar | List of events
  // this page has access to the ID of the post
  // this will allow us to make the AJAX calls for post data and comments

  getInitialState() {
    return {
      // this whole object gets replaced when the AJAX call goes through
      threadData: null
    };
  },

  addComment(comment) {
    // might need to do an update on that whole object
    var newComments = this.state.threadData.comments.slice();
    newComments.push({text: comment});

    var updated = Object.assign({}, this.state.threadData, {comments: newComments});

    const url = '/posts/' + this.props.params.id + '/comments/create';
    axios.post(url, {text: comment})
    .then((res) => {
      // no way to update the UI here, need to rework the app architecture
      console.log('success', res);

      this.setState({threadData: updated});
    })
    .catch((err) => {
      console.log(err);
    });
  },

  editComment(data) {
    axios.post('/posts/' + this.props.params.id + '/comments/' + data.commentid + '/edit', {text:data.comment}, 
               { headers: {authorization: 'bearer ' + Auth.getToken()} })
    .then((res) => {
      console.log('success', res);
      this.setState({threadData: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  },

    deleteComment(data) {
    axios.delete('/posts/' + this.props.params.id + '/comments/' + data.commentid + '/remove', 
               { headers: {authorization: 'bearer ' + Auth.getToken()} })
    .then((res) => {
      console.log('success', res);
      this.setState({threadData: res.data})
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
      padding: 10,
      margin: 10
    }

    // FIX, render only if there's threadData
    return (

      <Card style={style}>
        {this.state.threadData ? 
          <div>
            <ThreadPageItem data={this.state.threadData}
                            onUpvote={this.upvoteThread} 
                            onDownvote={this.downvoteThread} 
                            handleEdit={this.editThread}
                            handleDelete={this.deleteThread} />

						<CommentBox comments={this.state.threadData.comments} 
												onEdit={this.editComment} 
												onDelete={this.deleteComment} 
												onSubmit={this.addComment} />
          </div>
        : null}
      </Card>
    )
  }
})

ThreadPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ThreadPage;
