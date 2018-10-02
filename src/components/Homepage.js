import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


const Homepage =()=> {

    return (
      <div className="home-page">
        <Grid className="container game-rules-container">
          <Grid item xs={6} className="game-rules">
            <Paper>
              Welcome to the one and only dog memorizing game. In this game you will be presented with two type of questions where you have to choose the correct dog breed.
              the questions are as follow:
              1. A single image of a dog breed where you have to choose the right breed from multiple answers.
              2. Multiple image of dog breeds where you have to choose the right image corresponding to the asked dog breed.
              If you are ready, please hit the PLAY button and the game will start. Have fun !
            </Paper>
          </Grid>
          <Grid item xs={6} className="button-play">
          <Link to='/playground'><Button variant="contained" color="primary">
              PLAY
              </Button></Link>
          </Grid>
          <Grid item xs={6} className="data-layout">
          Data Layout with percentages
          </Grid>
        </Grid>
      </div>
    )
}



export default withStyles(styles)(Homepage)