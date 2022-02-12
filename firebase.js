// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGCqgYJRRT5TLZPAiDD9Wgvdjd7ryiOe8",
  authDomain: "instagram-clone-5c85a.firebaseapp.com",
  projectId: "instagram-clone-5c85a",
  storageBucket: "instagram-clone-5c85a.appspot.com",
  messagingSenderId: "104396595445",
  appId: "1:104396595445:web:bbfeb5f9f94406a24725bc",
  measurementId: "G-FMDMBCFTBK"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage }