// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU8ghP6p_RXHnLnr9DZjWdQ2bzrf66Abs",
  authDomain: "react-firebase-project-f3fdc.firebaseapp.com",
  projectId: "react-firebase-project-f3fdc",
  storageBucket: "react-firebase-project-f3fdc.appspot.com",
  messagingSenderId: "492269257965",
  appId: "1:492269257965:web:28dc6080f57d931632b8e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);