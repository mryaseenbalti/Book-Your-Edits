
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDR40tGTVSSa80u-JXCRcbQ-6iluAh7NA",
  authDomain: "book-your-edits.firebaseapp.com",
  projectId: "book-your-edits",
  storageBucket: "book-your-edits.appspot.com",
  messagingSenderId: "997165397656",
  appId: "1:997165397656:web:57c952d1ecdd518fbd02ed",
  measurementId: "G-1YCK3TZFP5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { app, auth }; 
