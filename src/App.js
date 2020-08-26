import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignIn from './pages/Signinpage/Signinpage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
