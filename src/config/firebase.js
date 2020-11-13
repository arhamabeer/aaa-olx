import firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


var firebaseConfig = {
    apiKey: "AIzaSyAQpQBYB9vKAiQEeacbHZH6iUGhjBljVHU",
    authDomain: "aaa-olx.firebaseapp.com",
    databaseURL: "https://aaa-olx.firebaseio.com",
    projectId: "aaa-olx",
    storageBucket: "aaa-olx.appspot.com",
    messagingSenderId: "602951991195",
    appId: "1:602951991195:web:cf2a671c749360854b2b3e",
    measurementId: "G-MBHE5GD24H"
  };
  // Initialize Firebase

  export default firebase.initializeApp(firebaseConfig);