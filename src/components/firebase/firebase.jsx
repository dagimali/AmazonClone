/** @format */

// Import the functions you need from the SDKs you need
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDacZ5Jo2g6ymD3XXMCrcvKgVtol-UePmk",
  authDomain: "clone-f8844.firebaseapp.com",
  projectId: "clone-f8844",
  storageBucket: "clone-f8844.appspot.com",
  messagingSenderId: "545551635970",
  appId: "1:545551635970:web:70818d5141aef73a92b91b",
  measurementId: "G-Q5MWS6XDSG",
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const dataBase = firebaseApp.firestore();
const auth = firebase.auth();
export { dataBase, auth };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
