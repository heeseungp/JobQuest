
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
      greeting: 'hello',
    };
  },

  render() {
    return (
      <Card className="container">
        <CardTitle title="Single thread" subtitle="Check out this single thread page yo" />
        {/*<p>The id of this thread is: {this.props.params.id}</p>*/}
      
        <ThreadItem />
        <CommentBox />
      </Card>
    )
  }
})

export default ThreadPage;