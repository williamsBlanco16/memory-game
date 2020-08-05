import React from 'react';
import Card from './game/Card';
import { Container } from '@material-ui/core'
 
import BoardContainer from './game/BoardContainer';

export default function Test() {
  return (
    <Container>
      <BoardContainer/>
    </Container>
  )
}
