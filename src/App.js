/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Bascet from './components/bascet';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bascet" component={Bascet} />
      </Switch>
    </div>
  );
}

export default App;
