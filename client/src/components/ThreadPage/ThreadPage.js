
import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItem from '../ThreadItem/ThreadItem';
import CommentBox from '../CommentBox/CommentBox';
import axios from 'axios';

const ThreadPage = React.createClass({

  // this page contains 4 UI components
  // ThreadItem with description | CommentBox | Calendar | List of events
  // this page has access to the ID of the post
  // this will allow us to make the AJAX calls for post data and comments

  // TODO, hook in componentDidMount

  getInitialState() {
    return {
      // this whole object gets replaced when the AJAX call goes through
      threadData: ''
    };
  },

  addComment(comment) {
    // might need to do an update on that whole object
    var newComments = this.state.threadData.comments.slice();
    newComments.push(comment);

    var updated = Object.assign({}, this.state.threadData, {comments: newComments});
    this.setState({threadData: updated});
  },

  componentDidMount() {
    const url = '/posts/' + this.props.params.id + '/show';
    axios.get(url)
      .then(res => {
        console.log('the response went through', res.data);
        this.setState({threadData: res.data});
      });
  },

  render() {
    return (
      <Card className="container">
        <CardTitle title="Single thread" subtitle="sup dawg" />
        {/*<p>The id of this thread is: {this.props.params.id}</p>*/}
      
        <ThreadItem data={this.state.threadData} showDesc={true} />
        <CommentBox comments={this.state.threadData.comments} onSubmit={this.addComment} />
      </Card>
    )
  }
})

export default ThreadPage;