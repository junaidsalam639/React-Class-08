// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , signInWithEmailAndPassword , createUserWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { getFirestore , collection , addDoc , query, where, getDocs, getDoc , doc} from "firebase/firestore";
import { getStorage  , ref, uploadBytes , getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnnL5SVwCt0OvITCKIx1a6KcsLnH2Cv-g",
  authDomain: "react-one-e5607.firebaseapp.com",
  projectId: "react-one-e5607",
  storageBucket: "react-one-e5607.appspot.com",
  messagingSenderId: "602324851235",
  appId: "1:602324851235:web:68728362e4dcc748342f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)


export {auth , db , storage , signInWithEmailAndPassword , createUserWithEmailAndPassword , collection , addDoc , ref, uploadBytes , getDownloadURL , query, where, getDocs, onAuthStateChanged , getDoc , doc }
