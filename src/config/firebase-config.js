// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqzQdcSW7xe6QFuBqUsxNBMfVDxOrNMo8",
  authDomain: "billet-de-sortie-918da.firebaseapp.com",
  projectId: "billet-de-sortie-918da",
  storageBucket: "billet-de-sortie-918da.appspot.com",
  messagingSenderId: "166695749290",
  appId: "1:166695749290:web:8d4cd5c56d2f527f08b2d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Export Firestore

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// firebase deploy
