import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Search from './pages/Search';
import Quote from './pages/Quote';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pokemon/:pokemon" component={Pokemon} />
        <Route path={['/search/:name', '/search/']} component={Search} />
        <Route path="/quote" component={Quote} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
