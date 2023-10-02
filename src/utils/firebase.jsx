import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCkLqUfYzXxAcgyHB-cLKvKoGyIffbrZww",
  authDomain: "netflixgpt-0-0.firebaseapp.com",
  projectId: "netflixgpt-0-0",
  storageBucket: "netflixgpt-0-0.appspot.com",
  messagingSenderId: "98093614428",
  appId: "1:98093614428:web:ecb3172a8474b6237e2d99",
  measurementId: "G-LB33H6ZEL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
