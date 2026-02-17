import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPovcL8kP-AFWjWt2QOht0J3uRMe1-vMY",
  authDomain: "moblieweb-dfaa2.firebaseapp.com",
  projectId: "moblieweb-dfaa2",
  storageBucket: "moblieweb-dfaa2.firebasestorage.app",
  messagingSenderId: "693484403683",
  appId: "1:693484403683:web:ef30c1876da2d1c6dabed6",
  measurementId: "G-PBQTXG7T6C"
};

export const app = initializeApp(firebaseConfig);   
export const db = getFirestore(app);
