import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "FIREBASE_KEY",
  authDomain: "asuratube-6e2ed.firebaseapp.com",
  projectId: "asuratube-6e2ed",
  storageBucket: "asuratube-6e2ed.appspot.com",
  messagingSenderId: "736725398327",
  appId: "1:736725398327:web:02fa5ee1924b8a9e7760b2",
  measurementId: "G-QV824F6244"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);
export const storage = getStorage(app); 

export default app;
