// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrsCYVFB7C0QgPMMm4A9Tgbusq8UHg-Rs",
  authDomain: "web-app-8cce8.firebaseapp.com",
  projectId: "web-app-8cce8",
  storageBucket: "web-app-8cce8.appspot.com",
  messagingSenderId: "882312930584",
  appId: "1:882312930584:web:eb2c10b907d95e32d42a6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)