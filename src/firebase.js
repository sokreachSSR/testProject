// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtWcZkCmr3v4WOjMzFgiGN7cGhGsxS25Q",
  authDomain: "loggin-3bdaa.firebaseapp.com",
  projectId: "loggin-3bdaa",
  storageBucket: "loggin-3bdaa.appspot.com",
  messagingSenderId: "770647264263",
  appId: "1:770647264263:web:355738fde8e53226392ea2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { provider, auth };
