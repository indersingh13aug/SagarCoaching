// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTm8Meme6rBIzDPYHdqba_ZzIHBwk-ph0",
  authDomain: "webcoreai-b1bbb.firebaseapp.com",
  projectId: "webcoreai-b1bbb",
  storageBucket: "webcoreai-b1bbb.firebasestorage.app",
  messagingSenderId: "541777459775",
  appId: "1:541777459775:web:5cc29017e22ab1b0c1d68a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);