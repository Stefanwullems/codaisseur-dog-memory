import React from 'react'
import Grid from '@material-ui/core/Grid';
import StartButton from './StartButton';
import Rules from './Rules'
import DataPanel from './DataPanel'
import {withStyles} from "@material-ui/core"

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

const Homepage =(props)=> {
  const {classes} = props
      return (
      <div className="home-page">
       <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container justify="center" align='center' spacing={16}>
          <Grid item xs className="game-rules">
            <Rules></Rules>
          </Grid>
          <Grid item xs className="button-play">
            <StartButton></StartButton>
          </Grid>
          <Grid item xs className="data-layout">
            <DataPanel></DataPanel>
          </Grid>
          </Grid>
          </Grid>
          </Grid>
      </div>
    )
}

export default withStyles(styles)(Homepage)