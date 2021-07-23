import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJi7QWewesJqVP3OX5OLyy5RDuxWHSNkc",
  authDomain: "waldo-4109b.firebaseapp.com",
  projectId: "waldo-4109b",
  storageBucket: "waldo-4109b.appspot.com",
  messagingSenderId: "323861107720",
  appId: "1:323861107720:web:62a1ce7e8f9fbeb3bd6dbd",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
