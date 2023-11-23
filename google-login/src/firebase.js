// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJJNuU3QAOdzeGNgstUp9LtGxtg3WRwt0",
  authDomain: "sandwich-app-808be.firebaseapp.com",
  projectId: "sandwich-app-808be",
  storageBucket: "sandwich-app-808be.appspot.com",
  messagingSenderId: "986105410238",
  appId: "1:986105410238:web:1bbde6781349d4fb4364ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
