import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import ThreadItemContainer from '../ThreadItemContainer/ThreadItemContainer'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

// import './ThreadListPage.css';


const ThreadListPage = React.createClass({

  render: function(){

    const style = {
      display: 'inline-block'
    };

    return (
      <div style={style} >

        <ThreadItemContainer />
        
      </div>
    );
  }
}); 

export default ThreadListPage;
