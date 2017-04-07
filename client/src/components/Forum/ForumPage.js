import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import ThreadForm from '../ThreadForm/ThreadForm'
import Reddit from '../Reddit/Reddit'

import './ForumPage.css';


const ForumPage = () => (
  <div>

    <Card className="container">
      <CardTitle title="Welcome to JobQuest's Forums" 
                 subtitle="Here's where students ask questions" />
    </Card>

    <div className="flex-container">
      <div className="mainbar">
        <div id="newPost" className="button-line">
          <Link to="/new_post">
            <RaisedButton label="Create a new post" primary />
          </Link>
        </div>

      <ThreadItemContainer />
      {/*<ThreadForm />*/}
    </div>

    <div className="sidebar">
      <Reddit  />
    </div>
  </div>

  </div>
);

export default ForumPage;