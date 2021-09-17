// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyByUK9Oyh-6BcDmhs92lsLS6dTk-jSDciE",
  authDomain: "challenge-3d419.firebaseapp.com",
  projectId: "challenge-3d419",
  storageBucket: "challenge-3d419.appspot.com",
  messagingSenderId: "556417636601",
  appId: "1:556417636601:web:08712c5883d11794342a28",
  measurementId: "G-R0F8EE800Q",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
