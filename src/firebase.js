import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3S72NwtQpfU6FsKwwGtcHacR-v46i2Ss",
    authDomain: "facebook-clone-b0620.firebaseapp.com",
    databaseURL: "https://facebook-clone-b0620.firebaseio.com",
    projectId: "facebook-clone-b0620",
    storageBucket: "facebook-clone-b0620.appspot.com",
    messagingSenderId: "704571130716",
    appId: "1:704571130716:web:c321cd3edc4b1ef15d7799",
    measurementId: "G-9TZM3QD0N5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;