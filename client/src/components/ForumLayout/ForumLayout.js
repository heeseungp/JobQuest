import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import ThreadForm from '../ThreadForm/ThreadForm';
import FutureEvents from '../Events/FutureEvents'

import './ForumLayout.css';


const ForumLayout = React.createClass({

  render: function(){

    return (
      <div>
        <Card className="container">
          <CardTitle title="Welcome to JobQuest's Forums" 
                    subtitle="Here's where students ask questions" />
          <div id="newPost" className="button-line">
            <Link to="/new_post">
              <RaisedButton label="Create a new post" primary />
            </Link>
          </div>
        </Card>

        {this.props.children}
        
        <div id="rightColumn">
          <div id="calendar"> Calendar here </div>
          <div id="events">
            <FutureEvents />
          </div>
        </div>
        
      </div>
    );
  }
}); 

export default ForumLayout;
