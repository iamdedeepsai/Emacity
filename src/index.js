// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCOC-6aEheqSUaQOPbB2jPaZgJB6RhAGbU",
    authDomain: "emacity-yfs.firebaseapp.com",
    projectId: "emacity-yfs",
    storageBucket: "emacity-yfs.appspot.com",
    messagingSenderId: "1066819817386",
    appId: "1:1066819817386:web:6ed7205bfcf3b831b065d3",
    measurementId: "G-3VRM4RLBGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);