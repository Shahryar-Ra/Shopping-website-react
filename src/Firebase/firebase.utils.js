import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXua_d1avapyLXu8SqeUAZAgSvcSVjWak',
  authDomain: 'e-commerce-shop-fa12d.firebaseapp.com',
  databaseURL: 'https://e-commerce-shop-fa12d.firebaseio.com',
  projectId: 'e-commerce-shop-fa12d',
  storageBucket: 'e-commerce-shop-fa12d.appspot.com',
  messagingSenderId: '935844537236',
  appId: '1:935844537236:web:94f8140175c2a590ad6581',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      alert('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
