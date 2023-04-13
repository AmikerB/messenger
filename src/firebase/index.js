// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA86l0sPQJnuAmIx-zfQZV9kWumh5OdKM",
    authDomain: "todo-project-dbc66.firebaseapp.com",
    projectId: "todo-project-dbc66",
    storageBucket: "todo-project-dbc66.appspot.com",
    messagingSenderId: "851653837487",
    appId: "1:851653837487:web:3c1b77679f61af20b08a5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);