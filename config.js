// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD0lE22hd5VYZxZlW97V5LU6msweoxaAhY",
  authDomain: "mosa3ada-biztech-ma.firebaseapp.com",
  projectId: "mosa3ada-biztech-ma",
  storageBucket: "mosa3ada-biztech-ma.appspot.com",
  messagingSenderId: "1069996130836",
  appId: "1:1069996130836:web:16fde5c2c821c647645d01",
  measurementId: "G-S4X2P0MWL0",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
