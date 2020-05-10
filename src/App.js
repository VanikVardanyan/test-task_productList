/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/home';
import Bascet from './components/bascet';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bascet" component={Bascet} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
