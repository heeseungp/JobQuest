
import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItem from '../ThreadItem/ThreadItem'
import CommentBox from '../CommentBox/CommentBox'

const ThreadPage = React.createClass({

  // this page contains 4 UI components
  // ThreadItem with description | CommentBox | Calendar | List of events
  // this page has access to the ID of the post
  // this will allow us to make the AJAX calls for post data and comments

  getInitialState() {
    return {
      // this whole object gets replaced when the AJAX call goes through
      threadData: {
        comments: []
      },
    };
  },

  addComment(comment) {
    // might need to do an update on that whole object
    var newComments = this.state.threadData.comments.slice();
    newComments.push(comment);

    var updated = Object.assign({}, this.state.threadData, {comments: newComments});
    this.setState({threadData: updated})
  },

  render() {
    return (
      <Card className="container">
        <CardTitle title="Single thread" subtitle="Check out this single thread page yo" />
        {/*<p>The id of this thread is: {this.props.params.id}</p>*/}
      
        <ThreadItem data={this.state.threadData} />
        <CommentBox comments={this.state.threadData.comments} onSubmit={this.addComment} />
      </Card>
    )
  }
})

export default ThreadPage;