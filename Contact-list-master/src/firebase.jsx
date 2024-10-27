// firebase.jsx
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDHwiFkvTjhPo4pKB0uZNYySqSiAoBENE",
  authDomain: "fs-21-9c45b.firebaseapp.com",
  projectId: "fs-21-9c45b",
  storageBucket: "fs-21-9c45b.appspot.com",
  messagingSenderId: "103576448527",
  appId: "1:103576448527:web:89186d13542fcbf8c8fd7a"
};

// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
