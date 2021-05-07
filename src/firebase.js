import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvaRTcOwnncSW_1B9ShRZRCua1MjUAp8g",
    authDomain: "snapchat-clone-5b97b.firebaseapp.com",
    projectId: "snapchat-clone-5b97b",
    storageBucket: "snapchat-clone-5b97b.appspot.com",
    messagingSenderId: "268710738791",
    appId: "1:268710738791:web:45fa4358fc7a65112c8dc2",
    measurementId: "G-4DJS7BSXT1"
  };

  // eslint-disable-next-line no-unused-vars
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, storage, provider };