// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, onSnapshot, doc, setDoc, updateDoc  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRIDewCPZ4zrAI8hIeS3AbSzmvepbG9ZI",
  authDomain: "boyjones-b8294.firebaseapp.com",
  projectId: "boyjones-b8294",
//   storageBucket: "boyjones-b8294.appspot.com",
//   messagingSenderId: "998231015192",
  appId: "1:998231015192:web:575a1eb3e62dfda9b5686d",
  measurementId: "G-T4XGGNPFYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

// get data from db (regardless of logged in status)
onSnapshot(collection(db, 'links'), (snapshot) => {
    setupLinks(snapshot.docs);
}, err => {
    console.log(err.message)
});