// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCEaiFsip1hh6Ga6QEjljYNLmbuMg9x08",
  authDomain: "native-mobile-app-b2b94.firebaseapp.com",
  projectId: "native-mobile-app-b2b94",
  storageBucket: "native-mobile-app-b2b94.appspot.com",
  messagingSenderId: "234170186665",
  appId: "1:234170186665:web:cd7a4c3684ba741d92a2b8",
  measurementId: "G-T0R46CXQ8V",
  storageBucket: "gs://native-mobile-app-b2b94.appspot.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
