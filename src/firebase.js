import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyDJH1IPjsshzVUVZglrXjarG3AEggFKp94",
    authDomain: "mealsdb-1dd93.firebaseapp.com",
    projectId: "mealsdb-1dd93",
    storageBucket: "mealsdb-1dd93.appspot.com",
    messagingSenderId: "838704254954",
    appId: "1:838704254954:web:7e1fce43ee2e82656e6c93"
  };

  const app = firebase.initializeApp(firebaseConfig)
  // database
const db = app.firestore(); 
// auth 
const auth = app.auth(); 

export {db, auth};