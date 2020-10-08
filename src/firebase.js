// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyALURnJcAZY2wE5cOmaG0HxHwhWdCrPbyk",
  authDomain: "instashare-potts.firebaseapp.com",
  databaseURL: "https://instashare-potts.firebaseio.com",
  projectId: "instashare-potts",
  storageBucket: "instashare-potts.appspot.com",
  messagingSenderId: "455975184209",
  appId: "1:455975184209:web:aa8f4c561cb3d323d85570",
  measurementId: "G-T5KEDHC7FS",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
