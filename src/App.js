import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';

const Hatspage = () => <h1>HATS PAGE</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop/hats' component={Hatspage} />
      </Switch>
    </div>
  );
}

export default App;
