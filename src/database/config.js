import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzWFRTHToq0mTtAr3Z_sTlG9zcsFZm3n4",
  authDomain: "book-app-e14a4.firebaseapp.com",
  projectId: "book-app-e14a4",
  storageBucket: "book-app-e14a4.firebasestorage.app",
  messagingSenderId: "673465499738",
  appId: "1:673465499738:web:02eb71125b9cfe52da1863"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);