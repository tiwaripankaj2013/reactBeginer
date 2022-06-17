// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJpEjKVmS4I93Evv63vIImh5wyS43MDNA",
  authDomain: "authentication-721ef.firebaseapp.com",
  projectId: "authentication-721ef",
  storageBucket: "authentication-721ef.appspot.com",
  messagingSenderId: "542606974517",
  appId: "1:542606974517:web:7f23933fe70af5d9d4db7c",
  measurementId: "G-MPZ1K3SQD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
const db = getFirestore();

export { app, auth ,db};
