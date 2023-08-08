import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "FIREBASE_KEY",
  authDomain: "yutube-11653.firebaseapp.com",
  projectId: "yutube-11653",
  storageBucket: "yutube-11653.appspot.com",
  messagingSenderId: "954689027282",
  appId: "1:954689027282:web:142e5df58355561e57810b",
  measurementId: "G-FXZZQ1TDDL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);

export default app;
