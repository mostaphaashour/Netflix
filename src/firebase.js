// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBviyscAUAbQv6qsIyigZW8WpyKV5g003w",
  authDomain: "netflix-abcc1.firebaseapp.com",
  projectId: "netflix-abcc1",
  storageBucket: "netflix-abcc1.appspot.com",
  messagingSenderId: "565021106976",
  appId: "1:565021106976:web:f7920e4e6a0ed453a02d45",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
