// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNVP5kTSfG7HOfdEb1SXgSgs-ejZyeO6M",
  authDomain: "test12-94200.firebaseapp.com",
  projectId: "test12-94200",
  storageBucket: "test12-94200.appspot.com",
  messagingSenderId: "219038156140",
  appId: "1:219038156140:web:f1b60049fd5c9f9e285f49",
  measurementId: "G-Q6N550CEFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const database = getDatabase(app);

