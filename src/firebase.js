import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp({
    apiKey: "AIzaSyBnNme4niVVZx8jnzmJxFT7_NNWrFN1RZQ",
    authDomain: "saiesh-for-geniuslabs.firebaseapp.com",
    projectId: "saiesh-for-geniuslabs",
    storageBucket: "saiesh-for-geniuslabs.appspot.com",
    messagingSenderId: "536773830149",
    appId: "1:536773830149:web:87a40fad43de0da7801e6c",
    measurementId: "G-K4C7ETCY1Z"
  })

  const auth = firebase.auth();

  export {auth};
