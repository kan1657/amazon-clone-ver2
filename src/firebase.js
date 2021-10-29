import firebase from "firebase";
require("firebase/auth");
const firebaseConfig = {
  apiKey: "AIzaSyBylpk1xWvR2L7lSdo-OnyimhONVnlG1F8",
  authDomain: "clone-ver2.firebaseapp.com",
  projectId: "clone-ver2",
  storageBucket: "clone-ver2.appspot.com",
  messagingSenderId: "904185206433",
  appId: "1:904185206433:web:4479269a3d0cf675bc82e0",
  measurementId: "G-06FWQVN1JQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
