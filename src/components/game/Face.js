import React from 'react'
import { makeStyles, Box } from '@material-ui/core';

export default function Face({
  src = 'https://w.wallhaven.cc/full/md/wallhaven-mdoj7m.png', 
  alt = 'what is this?',
  type
}) {
  const classes = useStyles();
  return (
    <Box className = { `${classes.face} ${classes[type] }`}>
      <img 
        src={src}
        alt={alt} 
        className={classes.img}
      />
    </Box>
  )
};

const useStyles = makeStyles({
  face:{
    backfaceVisibility:'hidden',
    position:'absolute'
  },
  img:{
    width:100,
    height:100
  },
  front:{
    transform: 'rotateY(0deg)'
  },
  back:{
    transform: 'rotateY(180deg)'
  }
})
