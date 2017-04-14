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
    margin: '0 auto'
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
    marginBottom: 150
  },
  checkFeatures: {
    fontSize: 60,
    padding: 30,
    textAlign: 'center',
    backgroundColor: 'grey'
  }
}

const HomePage = () => (

  <div>
    <GridList cols={12} padding={0} cellHeight={650} >
      <GridTile
        cols={12} style={style.tile} 
        title={'Welcome to JobQuest'} titlePosition={'bottom'}
        titleStyle={style.title} titleBackground={'rgba(0, 0, 0, 0)'} >
        <img src={'/backgrounds/code_wp1.jpg'}/>
      </GridTile>
    </GridList>

    <GridList cols={12} padding={10} cellHeight={'auto'} style={style.checkFeatures} >
      <GridTile
        cols={12} style={style.tile} >
        Check out some of our features!
      </GridTile>
    </GridList>

    <GridList cols={12} padding={0} cellHeight={'auto'} style={style.gridListFeatures} >
      <GridTile
        rows={3} cols={6} style={style.tile} >
        <Paper style={style.paper} zDepth={2} >
          Forum description
        </Paper>
      </GridTile>

      <GridTile cols={6} style={style.tile} >
        <Paper style={style.paper} zDepth={2} >
          <img src="http://placehold.it/550x350" />
        </Paper>
      </GridTile>
    </GridList>

    <GridList cols={12} padding={0} cellHeight={'auto'} style={style.gridListFeatures} >
      <GridTile
        rows={3} cols={6} style={style.tile} >
        <Paper style={style.paper} zDepth={2} >
          Application Log description
        </Paper>
      </GridTile>

      <GridTile cols={6} style={style.tile} >
        <Paper style={style.paper} zDepth={2} >
          <img src="http://placehold.it/550x350" />
        </Paper>
      </GridTile>
    </GridList>

    <GridList cols={12} padding={0} cellHeight={'auto'} style={style.gridListFeatures} >
      <GridTile
        rows={3} cols={6} style={style.tile} >
        <Paper style={style.paper} zDepth={2} >
          Interview questions description
        </Paper>
      </GridTile>

      <GridTile cols={6} style={style.tile} >
        <Paper style={style.paper} zDepth={2} >
          <img src="http://placehold.it/550x350" />
        </Paper>
      </GridTile>
    </GridList>

  </div>

);

export default HomePage;