import React, { useReducer, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';
import Header from './components/Header/Header';
import SignIn from './pages/Signinpage/Signinpage';

import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

function App({ setCurrentUser }) {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
