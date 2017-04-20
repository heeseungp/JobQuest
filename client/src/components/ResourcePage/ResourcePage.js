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
          <p className="resourcelink"><a href="https://www.codecademy.com/" target="_blank">Code Academy: Free interactive coding tutorials</a></p>
          <p className="resourcelink"><a href="https://www.codeschool.com/" target="_blank">Code School: Hands-on coding courses</a></p>
          <p className="resourcelink"><a href="https://github.com/vhf/free-programming-books/blob/master/free-programming-books.md#d" target="_blank">List of free programming books</a></p>
          <p className="resourcelink"><a href="https://www.w3schools.com/" target="_blank">W3schools: Coding tutorials/references</a></p>
          <p className="resourcelink"><a href="http://codebetter.com/karlseguin/2008/06/25/foundations-of-programming-ebook/" target="_blank">Foundations of Programming Ebook</a></p>
          <p className="resourcelink"><a href="https://www.codewars.com/" target="_blank">Codewars: Challenge-based training</a></p>
          <p className="resourcelink"><a href="https://www.coursera.org/" target="_blank">Coursera: Online course library</a></p>
          <p className="resourcelink"><a href="http://ocw.mit.edu/index.htm" target="_blank">MIT OpenCourseware: Learn from MIT course material</a></p>
          <p className="resourcelink"><a href="https://scotch.io/" target="_blank">Scotch.io: Web Dev Tutorials</a></p>
          <p className="resourcelink"><a href="https://try.github.io/levels/1/challenges/1" target="_blank">Try Git: Quick challenges to teach git basics</a></p>
        </Paper>
        <Paper style={style}  zDepth={1}>
          <h2>Tools</h2>
          <p className="resourcelink"><a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code: Lightweight code editor</a></p>
          <p className="resourcelink"><a href="https://www.getpostman.com/" target="_blank">Postman: HTTP request generator</a></p>
          <p className="resourcelink"><a href="http://www.material-ui.com/#/" target="_blank">Material UI: Used to style this website</a></p>
          <p className="resourcelink"><a href="http://www.sublimetext.com/" target="_blank">Sublime Text Editor</a></p>
          <p className="resourcelink"><a href="https://c9.io/" target="_blank">Cloud 9: Cloud-based VM environment</a></p>
          <p className="resourcelink"><a href="https://github.com/" target="_blank">Github: Online repository for sharing code</a></p>
        </Paper>
    </div>
  </div>
);

export default ResourcePage;