// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCR3ajz1l6Fazcm_7SZVLlH3AtEAZLr-NU",
    authDomain: "tourist-guide-6c7c0.firebaseapp.com",
    projectId: "tourist-guide-6c7c0",
    storageBucket: "tourist-guide-6c7c0.appspot.com",
    messagingSenderId: "395180476499",
    appId: "1:395180476499:web:d0b546fc9510b83ae0dea6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;