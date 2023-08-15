import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP9a6Kz3ukI3W3Fb4QvVWPr4X5p4v1xi8",
  authDomain: "discosgb.firebaseapp.com",
  projectId: "discosgb",
  storageBucket: "discosgb.appspot.com",
  messagingSenderId: "172307596674",
  appId: "1:172307596674:web:f2e6c404a75bee35b17b9b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);