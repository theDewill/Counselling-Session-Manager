import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCLZlbPBN0P4HI2YWs_KeF6ARIxf8pyPAY",
  authDomain: "sitebackend-2f34e.firebaseapp.com",
  projectId: "sitebackend-2f34e",
  storageBucket: "sitebackend-2f34e.appspot.com",
  messagingSenderId: "94688703117",
  appId: "1:94688703117:web:326f328878fc5558f8e8c4",
  measurementId: "G-MRRQK00C2K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
