// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// Your Firebase config (this is SAFE to expose)
const firebaseConfig = {
  apiKey: "AIzaSyC1z_xShdA0cb_9BUj-SW9cnJtNg74Gpik",
  authDomain: "nmss-portal.firebaseapp.com",
  projectId: "nmss-portal",
  storageBucket: "nmss-portal.firebasestorage.app",
  messagingSenderId: "781809002856",
  appId: "1:781809002856:web:56e07f03466e60d99e0edd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export what we need
export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase connected");
