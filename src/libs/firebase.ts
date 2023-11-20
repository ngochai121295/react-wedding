// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAHmlDLdFkNb4drH3sJ0TTmPydeEeT61AA',
    authDomain: 'wedding-invitation-6aec5.firebaseapp.com',
    projectId: 'wedding-invitation-6aec5',
    storageBucket: 'wedding-invitation-6aec5.appspot.com',
    messagingSenderId: '956508471000',
    appId: '1:956508471000:web:bb044c9f51527d12e521ad',
    measurementId: 'G-FCCM8KP86P',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app