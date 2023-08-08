import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "FIREBASE_KEY",
<<<<<<< HEAD
  authDomain: "yutube-11653.firebaseapp.com",
  projectId: "yutube-11653",
  storageBucket: "yutube-11653.appspot.com",
  messagingSenderId: "954689027282",
  appId: "1:954689027282:web:142e5df58355561e57810b",
  measurementId: "G-FXZZQ1TDDL"
=======
  authDomain: "asuratube-6e2ed.firebaseapp.com",
  projectId: "asuratube-6e2ed",
  storageBucket: "asuratube-6e2ed.appspot.com",
  messagingSenderId: "736725398327",
  appId: "1:736725398327:web:02fa5ee1924b8a9e7760b2",
  measurementId: "G-QV824F6244"
>>>>>>> e6ea0f1 (updated)
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);

<<<<<<< HEAD
export default app;
=======
export default app;
>>>>>>> e6ea0f1 (updated)
