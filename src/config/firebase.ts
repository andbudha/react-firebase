// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAuoAJZUJpcOAs852idvmV7Km3HOrFD1Hc',
  authDomain: 'fir-auth-crud-dde5f.firebaseapp.com',
  projectId: 'fir-auth-crud-dde5f',
  storageBucket: 'fir-auth-crud-dde5f.appspot.com',
  messagingSenderId: '448252701391',
  appId: '1:448252701391:web:b73a3b2b273e0daeaaa5ba',
  measurementId: 'G-048GW77Q77',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const dataBase = getFirestore();
