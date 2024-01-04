// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBsxkTBW9TLnAQ7cNfD1wnfOqKZNOZ75Y",
  authDomain: "react-project-69580.firebaseapp.com",
  projectId: "react-project-69580",
  storageBucket: "react-project-69580.appspot.com",
  messagingSenderId: "509323324590",
  appId: "1:509323324590:web:46c6e5e34c887edc48913f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();