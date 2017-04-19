import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

import './HomePage.css';

// goal is to create a scrolling site

const HomePage = () => (
  <div id="homepage">
    <div className="features">
      <figure className="homepageImg">
        <img src="http://wallresolution.com/wp-content/uploads/2016/09/Fine-Job-Keyboard-Funny-Wallpaper-HD.jpg" />
      </figure>
    </div>
    
    <div className="features">
      <div className="featContent">
        <div className="block feature-desc">
          <h1>Forum</h1>
          <p>A place where you can ask questions regarding a career in Computer Science</p>
        </div>
        <div className="block">
          <figure className="homepageImg">
          <img src="http://wallresolution.com/wp-content/uploads/2016/09/Fine-Job-Keyboard-Funny-Wallpaper-HD.jpg" />
          </figure>
        </div>
      </div>
    </div>
    
    <div className="features">
      <div className="featContent">
        <div className="block">
          <figure className="homepageImg">
          <img src="http://wallresolution.com/wp-content/uploads/2016/09/Fine-Job-Keyboard-Funny-Wallpaper-HD.jpg" />
          </figure>
        </div>
        <div className="block feature-desc">
          <h1>Forum</h1>
          <p>A place where you can ask questions regarding a career in Computer Science</p>
        </div>
      </div>
    </div>

    <div className="features">
      <div className="featContent">
        <div className="block feature-desc">
          <h1>Forum</h1>
          <p>A place where you can ask questions regarding a career in Computer Science</p>
        </div>
        <div className="block">
          <figure className="homepageImg">
          <img src="http://wallresolution.com/wp-content/uploads/2016/09/Fine-Job-Keyboard-Funny-Wallpaper-HD.jpg" />
          </figure>
        </div>
      </div>
    </div>
    
    <div className="features">
      <div className="featContent">
        <div className="block">
          <figure className="homepageImg">
          <img src="http://wallresolution.com/wp-content/uploads/2016/09/Fine-Job-Keyboard-Funny-Wallpaper-HD.jpg" />
          </figure>
        </div>
        <div className="block feature-desc">
          <h1>Forum</h1>
          <p>A place where you can ask questions regarding a career in Computer Science</p>
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