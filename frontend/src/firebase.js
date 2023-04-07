// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKMVUzm6mHi0kg1AxQL7x9QvonYdPo5vY",
  authDomain: "aimgen-7f468.firebaseapp.com",
  projectId: "aimgen-7f468",
  storageBucket: "aimgen-7f468.appspot.com",
  messagingSenderId: "400039148517",
  appId: "1:400039148517:web:57b3a7f5a8dc1de36c4d0c",
  measurementId: "G-CEQBXEVYKW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);