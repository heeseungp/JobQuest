import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import './HomePage.css';



// goal is to create a scrolling site

const HomePage = () => (
  <div id="homepage">
    {/*Big image*/}
    <div className="features">
      <figure className="homepageImg">
        <div className="testing">
          <img src="backgrounds/jobquest_logo.png" />
        </div>
      </figure>
    </div>
    
    {/*Forum*/}
    <div className="features" id="forum-feat" >
      <div className="featContent">
        <div className="block feature-desc">
          <h1 className="feat-title">Forum</h1>
          <p>A place to ask Computer Science related questions</p>
        </div>
        <div className="block">
          <figure className="homepageImg">
          <img src="features/jq-forum.png" />
          </figure>
        </div>
      </div>
    </div>
    
    {/*Application history*/}
    <div className="features" id="applog-feat">
      <div className="featContent">
        <div className="block">
          <figure className="homepageImg">
          <img src="features/jq-applog.png" />
          </figure>
        </div>
        <div className="block feature-desc">
          <h1 className="feat-title">Application History</h1>
          <p>A detailed log of all your submitted applications</p>
        </div>
      </div>
    </div>

    {/*Interview Questions*/}
    <div className="features" id="interview-feat">
      <div className="featContent">
        <div className="block feature-desc">
          <h1 className="feat-title">Interview Questions</h1>
          <p>A list of popular interview questions</p>
        </div>
        <div className="block">
          <figure className="homepageImg">
          <img src="features/jq-interview-qs.png" />
          </figure>
        </div>
      </div>
    </div>
    
    {/*Resources*/}
    <div className="features" id="resources-feat">
      <div className="featContent">
        <div className="block">
          <figure className="homepageImg">
          <img src="features/jq-resources.png" />
          </figure>
        </div>
        <div className="block feature-desc">
          <h1 className="feat-title">Resources</h1>
          <p>A list of resources to aid you in your job search</p>
        </div>
      </div>
    </div>
    
    <footer id="homepageInfo">
      <span>© JobQuest 2017</span>
      <span>Made with ♥ at CUNYCodes Spring 2017</span>
    </footer>
  </div>
);

export default HomePage;