// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCipeWRalQTcdmmuiSC2-GFrIvbke4oZDE",
  authDomain: "dashboard-4548c.firebaseapp.com",
  projectId: "dashboard-4548c",
  storageBucket: "dashboard-4548c.appspot.com",
  messagingSenderId: "990003219304",
  appId: "1:990003219304:web:089eff7471d3d20f0a24dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;