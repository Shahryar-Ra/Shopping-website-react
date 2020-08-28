import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignIn from './pages/Signinpage/Signinpage';

import { auth } from './Firebase/firebase.utils';

const initialState = {
  currentUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.user,
      };

    default:
      alert('Error in reducer switch');
  }
};

function App() {
  const [currentUser, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      dispatch({ type: 'SET_USER', payload: user });
      console.log(user);
    });
  }, []);

  return (
    <div>
      <Header user={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
