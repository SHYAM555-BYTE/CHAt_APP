import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDTUACoE9hno8gIf2J1qs7U8y4F2bevil0",
  authDomain: "chatapp-d7910.firebaseapp.com",
  projectId: "chatapp-d7910",
  storageBucket: "chatapp-d7910.appspot.com",
  messagingSenderId: "690694354990",
  appId: "1:690694354990:web:40227052d07aed870b07bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export  const db =  getFirestore();