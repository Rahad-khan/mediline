// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw3Q06hT83IN15CYm37LtpGicUPielUi4",
  authDomain: "medi-line-203b8.firebaseapp.com",
  projectId: "medi-line-203b8",
  storageBucket: "medi-line-203b8.appspot.com",
  messagingSenderId: "344240327706",
  appId: "1:344240327706:web:d8e6dc019f611baa1515a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;