// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS4Mn93NLC9bSTpV0TH84MnKhp-SA9itU",
  authDomain: "dating-website-97b0b.firebaseapp.com",
  projectId: "dating-website-97b0b",
  storageBucket: "dating-website-97b0b.appspot.com",
  messagingSenderId: "1095621633302",
  appId: "1:1095621633302:web:cf85c90aa1967357385c37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export{app, auth};