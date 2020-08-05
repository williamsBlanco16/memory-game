import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Test from './Test';
import Win from './game/Win'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component={Test}/>
        <Route path = '/test' component={Win}/>
      </Switch>
    </BrowserRouter>
  )
}
