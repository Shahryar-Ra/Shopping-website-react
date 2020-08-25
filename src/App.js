import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
