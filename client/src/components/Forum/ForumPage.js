import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer'
import ThreadForm from '../ThreadForm/ThreadForm'


const ForumPage = () => (
  <div>

    <Card className="container">
      <CardTitle title="Welcome to JobQuest's Forums" 
                 subtitle="Here's where students ask questions" />
    </Card>

    {/*<ThreadItemContainer />*/}
    <ThreadForm />

  </div>
);

export default ForumPage;