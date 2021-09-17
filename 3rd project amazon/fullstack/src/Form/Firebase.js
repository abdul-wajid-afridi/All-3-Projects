import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZc6TuRFd2N_qMC6eSjc-uLTAohln29OY",
  authDomain: "form-5b5f0.firebaseapp.com",
  projectId: "form-5b5f0",
  storageBucket: "form-5b5f0.appspot.com",
  messagingSenderId: "529246964048",
  appId: "1:529246964048:web:2077b55b12b12422ccc455",
  measurementId: "G-RQ0NWKT3BP",
});

const db = firebaseApp.firestore();
export default db;
