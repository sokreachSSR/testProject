// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgtYN7mVqxgwv39CnZA9Z8K_utOLbAQLA",
  authDomain: "portify-992a1.firebaseapp.com",
  projectId: "portify-992a1",
  storageBucket: "portify-992a1.appspot.com",
  messagingSenderId: "454070982023",
  appId: "1:454070982023:web:344d972ffa83fcdd6a6f22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { provider, auth };