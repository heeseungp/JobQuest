
import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
// import ThreadItem from '../ThreadItem/ThreadItem'

const ThreadPage = React.createClass({

  // this page contains 4 UI components
  // ThreadItem with description | CommentBox | Calendar | List of events


  render() {
    return (
      <Card className="container">
        <CardTitle title="Single thread" subtitle="Check out this single thread page yo" />
        <p>The id of this thread is: {this.props.params.id}</p>
      </Card>
    )
  }
})

export default ThreadPage;