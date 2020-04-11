import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// import Content from './components/content';

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={ Home } />
        <Route path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}