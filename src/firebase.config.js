// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtPFSjzOxYDZ0CEnuZDa4wsKyqKXQmXq8",
  authDomain: "okjob-1e8e4.firebaseapp.com",
  projectId: "okjob-1e8e4",
  storageBucket: "okjob-1e8e4.appspot.com",
  messagingSenderId: "1000578473925",
  appId: "1:1000578473925:web:22ea5459d680ccf0c575ac",
  measurementId: "G-K99YL8V0ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

export default app;