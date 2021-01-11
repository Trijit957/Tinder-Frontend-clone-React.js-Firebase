// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDW9q7RYsNrfZpHYFPdCJZkxR7ERf_wh9w",
    authDomain: "tinder-clone-e809b.firebaseapp.com",
    projectId: "tinder-clone-e809b",
    storageBucket: "tinder-clone-e809b.appspot.com",
    messagingSenderId: "500612853844",
    appId: "1:500612853844:web:7fbefbf9d361bf37167dc1",
    measurementId: "G-4NSS9W9NWT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore();

  export default database;