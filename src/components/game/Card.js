import React, {useState} from 'react';
import { Grid } from "@material-ui/core";

import Face from './Face';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

export default function Card({ src, flip, onClick, disabled}) {
  const classes = useStyles();
  return (
    <Grid item xs={4} sm={3} md={2} className={`${classes.card} ${classes[flip ? 'front' : 'back']}`}> 
      <Button 
        onClick={ onClick } 
        disabled={disabled}
        className={classes.btn}>
        {/* front */}
        <Face 
          src = {src}
          type = 'front'
        />
        {/* Back */}
        <Face type = 'back'/>
      </Button> 
    </Grid>
  )
}

const useStyles = makeStyles({
  card:{
    height:100,
    marginTop:10,
    transformStyle: 'preserve-3d',
    transition: 'all 0.5s linear',
    perspective: 1000
  },
  btn:{
    height:100,
    width: 100
  },
  front:{
    transform: 'rotateY(0deg)'
  },
  back:{
    transform: 'rotateY(180deg)'
  }
})
