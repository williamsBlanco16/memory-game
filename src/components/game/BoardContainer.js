import React from 'react'
import { Grid } from '@material-ui/core'
import Board from './Board';
export default function BoardContainer() {
  return (
    <Grid container justify='center'>
        <Board/>
    </Grid>

  )
}
