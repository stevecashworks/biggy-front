import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:"AIzaSyBgh5U6NqZft66UfrEy1cZyTV976kgqXLA",
  authDomain: "biggy-capitals.firebaseapp.com",
  projectId: "biggy-capitals",
  storageBucket: "biggy-capitals.appspot.com",
  messagingSenderId: "289424667591",
  appId: "1:289424667591:web:379daaf427a89151a6dfe2"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);