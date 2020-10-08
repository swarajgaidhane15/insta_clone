// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "YOUR API KEY",
  authDomain: "YOUR authDomain",
  databaseURL: "YOUR databaseURL",
  projectId: "YOUR projectId",
  storageBucket: "YOUR storageBucket",
  messagingSenderId: "YOUR messagingSenderId",
  appId: "YOUR appId",
  measurementId: "YOUR measurementId",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
