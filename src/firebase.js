import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "admin-panel-1a54c.firebaseapp.com",
  projectId: "admin-panel-1a54c",
  storageBucket: "admin-panel-1a54c.appspot.com",
  messagingSenderId: "752248361260",
  appId: "1:752248361260:web:05010373bb97981b0ddc89"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();