// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_acXgJ56MUnEJlVH3rvC-wyqAQyfw_GA",
  authDomain: "programminghero-login-signup.firebaseapp.com",
  projectId: "programminghero-login-signup",
  storageBucket: "programminghero-login-signup.appspot.com",
  messagingSenderId: "737529145702",
  appId: "1:737529145702:web:079cf3be64260fc331c0a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;