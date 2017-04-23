import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import ThreadForm from '../ThreadForm/ThreadForm';
import FutureEvents from '../Events/FutureEvents';
import Calendar from '../Calendar/Calendar';
import {GridList, GridTile} from 'material-ui/GridList';

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

        <GridList cols={12}>

          {/*threadlist*/}
          <GridTile cols={8} rows={'auto'} >
            {this.props.children}
          </GridTile>

          {/*right column*/}
          <GridTile cols={4} rows={'auto'} >
            <Calendar />
            <FutureEvents />
          </GridTile>
        </GridList>

      </div>
    );
  }
}); 

export default ForumLayout;
