import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAIL8uBQLRpKrmWSY6Tg0fHbzOId4jLtwU",
    authDomain: "lab-note.firebaseapp.com",
    projectId: "lab-note",
    storageBucket: "lab-note.appspot.com",
    messagingSenderId: "542913116319",
    appId: "1:542913116319:web:947f127c4d5f5d31168aaa",
    measurementId: "G-2GSDQGV8FX"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }
