// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "realtech-ecomerce-react-coder.firebaseapp.com",
  projectId: "realtech-ecomerce-react-coder",
  storageBucket: "realtech-ecomerce-react-coder.appspot.com",
  messagingSenderId: "882960034933",
  appId: "1:882960034933:web:fd840b141d03273f749c3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
