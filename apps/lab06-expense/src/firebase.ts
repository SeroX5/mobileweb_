// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// ❌ analytics ไม่จำเป็นใน lab นี้ เอาออกได้

const firebaseConfig = {
  apiKey: "AIzaSyAuQXq7CZ8HdskSuc-O4L6YQY4sCTXjtv4",
  authDomain: "moblieweb-dfaa2.firebaseapp.com",
  projectId: "moblieweb-dfaa2",
  storageBucket: "moblieweb-dfaa2.firebasestorage.app",
  messagingSenderId: "693484403683",
  appId: "1:693484403683:web:5bcb1cdb202fced9dabed6",
};

const app = initializeApp(firebaseConfig);

/** 🔥 สำคัญ */
export const db = getFirestore(app);
