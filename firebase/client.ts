import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrrBm6PT7TSNgfXMQtfcUcPy4ys9m6w4o",
    authDomain: "mockmate-c685a.firebaseapp.com",
    projectId: "mockmate-c685a",
    storageBucket: "mockmate-c685a.firebasestorage.app",
    messagingSenderId: "240349294143",
    appId: "1:240349294143:web:256047cec99d73682c528a",
    measurementId: "G-ZDWTF544F6"
};

// Initialize Firebase
const app =  !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
