// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN5LYDIHCJn8mb3nOHh9IZ0BFKsqV5BBI",
  authDomain: "quizdev-4ef39.firebaseapp.com",
  projectId: "quizdev-4ef39",
  storageBucket: "quizdev-4ef39.appspot.com",
  messagingSenderId: "250994030693",
  appId: "1:250994030693:web:9e3a6146671b96a80b6e8c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();