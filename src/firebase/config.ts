// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWJsdhZp5A4anA_WTx9b_flRNsFeCyukY",
  authDomain: "astro-autenticacion-17e73.firebaseapp.com",
  projectId: "astro-autenticacion-17e73",
  storageBucket: "astro-autenticacion-17e73.firebasestorage.app",
  messagingSenderId: "237430201097",
  appId: "1:237430201097:web:a6fc28e52a69278a36d1d8",
  measurementId: "G-V9K4JXPZ2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);


export const firebase= {
  app,
  auth,
}