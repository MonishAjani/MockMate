
import { initializeApp, getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKn9axBtJUJi1M_j-JWzHbiCXV30kZ6rQ",
    authDomain: "mockmate-b6f62.firebaseapp.com",
    projectId: "mockmate-b6f62",
    storageBucket: "mockmate-b6f62.firebasestorage.app",
    messagingSenderId: "682592440239",
    appId: "1:682592440239:web:b0c83848383950a19e295a",
    measurementId: "G-4BKCMBZ491"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);