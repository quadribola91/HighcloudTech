// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDZv4O68-6UkWLHSKDvuxavVZXe0VDxi7g",
  authDomain: "highcloud-tech.firebaseapp.com",
  projectId: "highcloud-tech",
  storageBucket: "highcloud-tech.appspot.com",
  messagingSenderId: "45516879301",
  appId: "1:45516879301:web:d949bdf5a51d3f30bb47ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
