import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';

const PlayerData = ({turn, label, score=0, streak=0}) => {
  return (
    <Box 
      display="flex" 
      flexDirection="column"
    >
      <Button
        variant='contained'
        color={turn ? 'primary' : 'default'}
      >
        <Typography> {`${label}:${score}`} </Typography> 
      </Button>

      <Button
        variant='contained'
        color={turn ? 'secondary' : 'default'}
      >
        <Typography> {`Streak: ${streak} `} </Typography> 
      </Button>
    </Box>
    );
}

export default PlayerData;
