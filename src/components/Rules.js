import React from 'react'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

  function Rules (props){
    return (
            <Paper>
              Welcome to the one and only dog memorizing game. In this game you will be presented with two type of questions where you have to choose the correct dog breed.
              the questions are as follow:
              1. A single image of a dog breed where you have to choose the right breed from multiple answers.
              2. Multiple image of dog breeds where you have to choose the right image corresponding to the asked dog breed.
              If you are ready, please hit the PLAY button and the game will start. Have fun !
            </Paper>
          )
}

export default withStyles(styles)(Rules)