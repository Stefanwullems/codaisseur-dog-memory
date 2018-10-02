import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {withStyles} from '@material-ui/core'

const styles = {
    linkBtn:{
        margin: 'auto'
    }
}

function StartButton (props){
    return (
        <div>
        <Link to='/playground' className={classes.linkBtn}>
            <Button variant="contained" color="primary">
            PLAY
            </Button>
        </Link>
        </div>
    )
}

export default withStyles(styles)(StartButton)