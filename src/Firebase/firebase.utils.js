import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXua_d1avapyLXu8SqeUAZAgSvcSVjWak',
  authDomain: 'e-commerce-shop-fa12d.firebaseapp.com',
  databaseURL: 'https://e-commerce-shop-fa12d.firebaseio.com',
  projectId: 'e-commerce-shop-fa12d',
  storageBucket: 'e-commerce-shop-fa12d.appspot.com',
  messagingSenderId: '935844537236',
  appId: '1:935844537236:web:94f8140175c2a590ad6581',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
