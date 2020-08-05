import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function Header() {
  const classes = useStyles();

  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography 
            variant='h5'
            className={classes.flex}
          >
            Memory Game
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.marginToolBar}></div>
    </header>
  );
}

const useStyles = makeStyles( theme => ({
  flex:{
    flex:1,
    textAlign:'center'
  },
  marginToolBar:theme.mixins.toolbar
}))