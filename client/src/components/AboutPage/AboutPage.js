import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import './AboutPage.css';


const AboutPage = () => (
  <Card className='aboutContainer'>
    <CardTitle title="About JobQuest" className="title"/>
    <div>
      <p>
      	JobQuest is a web app designed to help users with their job search by keeping track of their job application history, providing a forum to discuss computer science career topics, and post/answer interview questions.
      </p>
      <p>
      	This site was created during the CUNY Codes program in the Spring of 2017 by Kenichi Yamamoto, Enmanuel Almanzar, Joseph Park, Yosef Yudborovsky, Daniel Chia.
      </p>
    </div>
  </Card>
);

export default AboutPage;