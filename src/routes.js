import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Pokemon from './pages/Pokemon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/pokemon/:pokemon" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  );
}
