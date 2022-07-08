// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBz6oKoX3TCDixskTNtv0mKQ957TLDMvXI",
  authDomain: "tasks-220c6.firebaseapp.com",
  databaseURL: "https://tasks-220c6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tasks-220c6",
  storageBucket: "tasks-220c6.appspot.com",
  messagingSenderId: "1012532949409",
  appId: "1:1012532949409:web:9791f3be8b96a488e01be0",
  measurementId: "G-1YK958FDLY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app,analytics};
