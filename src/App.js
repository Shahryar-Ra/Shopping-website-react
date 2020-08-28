import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignIn from './pages/Signinpage/Signinpage';

import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

const initialState = {
  currentUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        currentUser: { ...action.payload },
      };
    case 'CLEAR_USER':
      return {
        currentUser: null,
      };

    default:
      alert('Error in reducer switch in app.js');
  }
};

function App() {
  const [currentUser, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch({
            type: 'SET_USER',
            payload: { id: snapShot.id, ...snapShot.data() },
          });
        });
      } else {
        dispatch({
          type: 'CLEAR_USER',
        });
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
