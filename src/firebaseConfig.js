// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaPpVYTJPE-pUA65qxu-yk7FBGW2mZWWU",
  authDomain: "practice-80c49.firebaseapp.com",
  projectId: "practice-80c49",
  storageBucket: "practice-80c49.appspot.com",
  messagingSenderId: "287414559261",
  appId: "1:287414559261:web:2215bd86d6143079dddcf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()

