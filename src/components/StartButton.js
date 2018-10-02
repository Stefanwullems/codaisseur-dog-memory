import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function(props){
    return (
        <div>
        <Link to='/playground'>
            <Button variant="contained" color="primary">
            PLAY
            </Button>
        </Link>
        </div>
    )
}