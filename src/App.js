import React, { useEffect } from 'react';
import './App.css';

// pages import
import Homepage from './pages/Homepage/Homepage';
import Shoppage from './pages/Shoppage/Shoppage';
import Signinpage from './pages/Signinpage/Signinpage';
import Checkout from './pages/CheckoutPage/Checkout';
import CollectionPage from './pages/CollectionPage/CollectionPage';

// components imports
import Header from './components/Header/Header';

// React Router imports
import { Switch, Route, Redirect } from 'react-router-dom';

// Firebase imports
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

// Redux imports
import { selectCurrentUser } from './redux/user/user.selector';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

// ------------------- App

function App({ setCurrentUser, currentUser }) {
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
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shoppage} />
        <Route exact path='/shop/:collectionId' component={CollectionPage} />
        <Route
          exact
          path='/signin'
          render={() => (currentUser ? <Redirect to='/' /> : <Signinpage />)}
        />
        <Route exact path='/checkout' component={Checkout} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
