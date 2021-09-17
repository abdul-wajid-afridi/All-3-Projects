// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBZRCsxY7WnFDFuHVzAwNcqsmX3GIenaIs",
  authDomain: "try-todo-app-13ee3.firebaseapp.com",
  projectId: "try-todo-app-13ee3",
  storageBucket: "try-todo-app-13ee3.appspot.com",
  messagingSenderId: "76131522302",
  appId: "1:76131522302:web:349834ff0e1ff65c0fb7af",
  measurementId: "G-Q05KPP5SY4",
});

const db = firebaseApp.firestore();
export default db;
