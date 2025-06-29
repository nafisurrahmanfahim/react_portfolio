// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL6CPhKfPfRZZDfCzAqqVNJzlS53h19Jw",
  authDomain: "react-portfolio-1249e.firebaseapp.com",
  projectId: "react-portfolio-1249e",
  storageBucket: "react-portfolio-1249e.firebasestorage.app",
  messagingSenderId: "951776880178",
  appId: "1:951776880178:web:db046d5d6426b5d5bd7e2b",
  measurementId: "G-PY2L4H1BPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig;