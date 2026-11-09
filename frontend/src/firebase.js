// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "automate-demo-ec33e.firebaseapp.com",
  projectId: "automate-demo-ec33e",
  storageBucket: "automate-demo-ec33e.firebasestorage.app",
  messagingSenderId: "603999248860",
  appId: "1:603999248860:web:ca7bf934e7d671ae206f19",
  measurementId: "G-FF25TXQ968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

