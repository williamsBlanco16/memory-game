import React, { useState, useEffect } from 'react';
import { 
    Box,
    Typography,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const Time = ({ counter }) => {

    const classes = useStyles();
    return (
        <Box 
            display='flex'
            flexDirection='column'
            className={classes.flex}
        >   
            <div>
                <Typography 
                    variant='subtitle1'  
                    >
                    {counter}
                </Typography>
                <Button>
                    VS
                </Button>
            </div>
        </Box>
    );
}

export default Time;

const useStyles = makeStyles({
    flex:{
        flex:1,
        textAlign:'center'
    }
})
