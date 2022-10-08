import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyD95B7wJA5iFhJUtHgxnRqYedduJ9YPCWU",
    authDomain: "product-46f44.firebaseapp.com",
    projectId: "product-46f44",
    storageBucket: "product-46f44.appspot.com",
    messagingSenderId: "509799487594",
    appId: "1:509799487594:web:9dfadc2e84a5e5092d5213"
  }; 
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const fs = firebase.firestore();
  const  storage = firebase.storage();
  export {auth,fs,storage}
