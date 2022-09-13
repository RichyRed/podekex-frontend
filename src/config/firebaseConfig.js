import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import{
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBY0ZKPc4NE20SmiFFSo5o9zzu9zGCdso",
  authDomain: "pokedex-e4e84.firebaseapp.com",
  projectId: "pokedex-e4e84",
  storageBucket: "pokedex-e4e84.appspot.com",
  messagingSenderId: "1089950786057",
  appId: "1:1089950786057:web:931a77d8b9bf0ebc91ced8",
  measurementId: "G-CYQ0GC60L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) 
try {
  await signInWithEmailAndPassword(email, auth, password);
  } catch (err){
    console.error(err);
     err;
  }


export {
  auth, 
  logInWithEmailAndPassword
};