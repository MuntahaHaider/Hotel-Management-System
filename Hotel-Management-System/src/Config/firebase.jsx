// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM9_zTbmsuZEmccGGAHjlPJBSmAN2jvOg",
  authDomain: "react-hackathon-with-fb-db.firebaseapp.com",
  projectId: "react-hackathon-with-fb-db",
  storageBucket: "react-hackathon-with-fb-db.appspot.com",
  messagingSenderId: "9258901398",
  appId: "1:9258901398:web:358ab8c05ca1e3a3bc07b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export { auth, database  };
   