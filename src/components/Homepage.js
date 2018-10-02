import React from 'react'
import Grid from '@material-ui/core/Grid';
import StartButton from './StartButton';
import Rules from './Rules'
import DataPanel from './DataPanel'

const Homepage =()=> {
    return (
      <div className="home-page">
        <Grid className="container game-rules-container">
        <Grid item xs={6} className="game-rules">
          <Rules></Rules>
          </Grid>
          <Grid item xs={6} className="button-play">
          <StartButton></StartButton>
          </Grid>
          <Grid item xs={6} className="data-layout">
          <DataPanel></DataPanel>
          </Grid>
        </Grid>
      </div>
    )
}

export default Homepage