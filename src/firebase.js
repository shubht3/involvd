import firebase from "firebase";
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDxahwsHtO551UoRq0UTn17FUu9dOT-Vwk",
  authDomain: "ugahacksapp.firebaseapp.com",
  databaseURL: "https://ugahacksapp.firebaseio.com",
  projectId: "ugahacksapp",
  storageBucket: "ugahacksapp.appspot.com",
  messagingSenderId: "908546373713",
  appId: "1:908546373713:web:707021e26fb502c27fe070",
  measurementId: "G-78FJLG0TD1"
});

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
