// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKp3WX_nJPMZFOjWu3oixSX2elBRKLuyo",
  authDomain: "worldpadle-gian.firebaseapp.com",
  projectId: "worldpadle-gian",
  storageBucket: "worldpadle-gian.appspot.com",
  messagingSenderId: "45650881643",
  appId: "1:45650881643:web:914806630842fb5230d52e"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig)

export const firebaseConnect = () => app



