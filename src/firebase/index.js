// Initialize Cloud Firestore through Firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCgkJlgYHgHyK9_FM1bO7k2YuZV3HcUNKE",
  authDomain: "hitakustore.firebaseapp.com",
  projectId: "hitakustore",
  storageBucket: "hitakustore.appspot.com",
  messagingSenderId: "74322538753",
  appId: "1:74322538753:web:c57b0fd7953662e9dd6b00",
  measurementId: "G-NTP8ZSS8KX"
  };

firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();
