import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import Reddit from '../Reddit/Reddit'
import './ResourcePage.css';

    const style = {
      width: 580,
      margin: 20,
      padding: 10
    };

const ResourcePage = () => (
  <div>
    <Card className="container">
      <CardTitle title="Additional Resources"  />
    </Card>

    <div className="flex-container">
        <Reddit  />
        <Paper style={style} zDepth={1}>
          <h2>Books/Guides</h2>
        </Paper>
        <Paper style={style}  zDepth={1}>
          <h2>Tools</h2>
        </Paper>
    </div>
  </div>
);

export default ResourcePage;