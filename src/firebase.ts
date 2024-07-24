import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5tyUPWYUe2UMuFg9avMFdLXyCWUmFKP4",
  authDomain: "running-project-99a2b.firebaseapp.com",
  projectId: "running-project-99a2b",
  storageBucket: "running-project-99a2b.appspot.com",
  messagingSenderId: "845668971977",
  appId: "1:845668971977:web:03e57b549cbe3777c5e418",
  measurementId: "G-V6918KSYRW",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
