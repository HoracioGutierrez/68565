import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "comision-68565.firebaseapp.com",
  projectId: "comision-68565",
  storageBucket: "comision-68565.firebasestorage.app",
  messagingSenderId: "512799267131",
  appId: "1:512799267131:web:dbb414625b164c1a70bf1e"
};

export const app = initializeApp(firebaseConfig);