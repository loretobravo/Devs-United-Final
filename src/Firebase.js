import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCH8QLGoMXxZE1bXaBSyQIKJ70YYcMfR7w",
    authDomain: "devs-united-final.firebaseapp.com",
    projectId: "devs-united-final",
    storageBucket: "devs-united-final.appspot.com",
    messagingSenderId: "397215127149",
    appId: "1:397215127149:web:4b8e4245e9dd5053961164",
    measurementId: "G-SY09V3EWXL"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;