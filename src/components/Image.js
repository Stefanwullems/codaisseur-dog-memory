import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    image: {
        width: 300,
        padding: 100,
        height: 300
    }
    
}

const Images = (props) => {
    const {classes} = props
    return <Grid  container alignItems ="center" justify="center">
             <img className={classes.image} alt="dog" src={"https://images.dog.ceo/breeds/sheepdog-english/n02105641_10397.jpg"}></img>
           </Grid> 
}

export default withStyles(styles)(Images)

