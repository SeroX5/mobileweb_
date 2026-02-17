import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPovcL8kP-AFWjWt2QOht0J3uRMe1-vMY",
  authDomain: "moblieweb-dfaa2.firebaseapp.com",
  projectId: "moblieweb-dfaa2",
  storageBucket: "moblieweb-dfaa2.firebasestorage.app",
  messagingSenderId: "693484403683",
  appId: "1:693484403683:web:b9e0b108e238d34adabed6",
  measurementId: "G-7SQHTN8DBE"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
