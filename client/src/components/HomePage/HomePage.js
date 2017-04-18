import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

// goal is to create a scrolling site

const style = {
  gridList: {
    padding: 0
  },
  tile: {
    // margin: '0 auto'
  },
  paper: {
    margin: 5
  },
  gridListFeatures: {
    margin: 15
  },
  title: {
    padding: 30,
    height: 100,
    fontSize: 100,
    textAlign: 'center',
    marginTop: 30
  },
  featDesc: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    content: {
      padding: 60,
      backgroundColor: 'white'
    },
    title: {
      fontSize: 30
    },
    desc: {
      fontSize: 25
    }
  },
}

const HomePage = () => (

  <div>
    <GridList cols={12} padding={0} cellHeight={750} >
      <GridTile
        cols={12} style={style.tile} 
        title={'Welcome to JobQuest'} titlePosition={'top'}
        titleStyle={style.title} titleBackground={'rgba(0, 0, 0, 0)'}
        subtitle={'Your one stop website to help you find a programming job'} >
        <img src={'/backgrounds/code_wp1.jpg'}/>
      </GridTile>
    </GridList>

    <GridList cols={12} padding={0} cellHeight={'auto'} style={style.gridListFeatures} >
      <GridTile
        cols={6} style={style.featDesc} >
        <div style={style.featDesc.content} >
          <div style={style.featDesc.title} > Forum </div> 
          <div style={style.featDesc.desc} > 
            A place to ask career related questions
          </div>
        </div>
      </GridTile>

      <GridTile cols={6} >
        <img src="http://placehold.it/450x250" />
      </GridTile>
    </GridList>

  </div>
);

export default HomePage;