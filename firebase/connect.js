import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKFd7D3Y7gT1TmceKqobCQZX7nAFnrQIw",
  authDomain: "mobile-9df87.firebaseapp.com",
  projectId: "mobile-9df87",
  storageBucket: "mobile-9df87.appspot.com",
  messagingSenderId: "905473580303",
  appId: "1:905473580303:web:e55d17bbe644fc4d5ff27a",
  measurementId: "G-6WBG99LLQH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp

