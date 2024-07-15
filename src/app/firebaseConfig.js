// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChElFFm6gBvq4MoRDfMEv-iCI1u3lw1Zw",
  authDomain: "venturegroup-1df49.firebaseapp.com",
  projectId: "venturegroup-1df49",
  storageBucket: "venturegroup-1df49.appspot.com",
  messagingSenderId: "1057297520862",
  appId: "1:1057297520862:web:52339c4297909fac280a4f",
  measurementId: "G-C5NRHBS6T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};