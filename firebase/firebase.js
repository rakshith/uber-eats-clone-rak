import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxeo1rh_K2eTlnRsvxDFjnbziNBauxYU8",
  authDomain: "uber-eats-clone-rak.firebaseapp.com",
  projectId: "uber-eats-clone-rak",
  storageBucket: "uber-eats-clone-rak.appspot.com",
  messagingSenderId: "219405551691",
  appId: "1:219405551691:web:688e55bf0544410d6e25ce",
  measurementId: "G-DSCXG88F3X",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
