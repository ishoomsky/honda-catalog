import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyAhjFQQ3pOKei5nHdRXf6umfAcgfvTzkcI",
    authDomain: "shumski-6c982.firebaseapp.com",
    databaseURL: "https://shumski-6c982.firebaseio.com",
    projectId: "shumski-6c982",
    storageBucket: "shumski-6c982.appspot.com",
    messagingSenderId: "184120908989",
    appId: "1:184120908989:web:786cb57791166dd4c3abd4",
    measurementId: "G-C6PFKJM5D1"
  };
  // Initialize Firebase

  firebase.initializeApp(config);

  export default firebase;