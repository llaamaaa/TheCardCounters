// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const config = {
  firebaseConfig: {
    apiKey: "AIzaSyBqkmWPGEGQLoY40WPmjYSCllxUjJIbwJ4",
    authDomain: "cardcounter-47287.firebaseapp.com",
    projectId: "cardcounter-47287",
    storageBucket: "cardcounter-47287.appspot.com",
    messagingSenderId: "976227107455",
    appId: "1:976227107455:web:fa69641c89495032fef54a",
    measurementId: "G-LDKPZVDX2J"
  }
};
const app = initializeApp(config.firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

// Initialize Firebase

// const analytics = getAnalytics(app);