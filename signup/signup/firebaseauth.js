// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js"
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js"
import {getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG3CmaY8-PEjKASZqTpx8J6qJ5z__LJhA",
  authDomain: "echotracker-57e98.firebaseapp.com",
  databaseURL: "https://echotracker-57e98-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "echotracker-57e98",
  storageBucket: "echotracker-57e98.appspot.com",
  messagingSenderId: "242376857259",
  appId: "1:242376857259:web:c7c0a214ea2147285d09ee",
  measurementId: "G-ZL0Z1RJH7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display='block';
    messageDiv.innerHTML= message;
    messageDiv.style.opacity= 1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
}

const signup = document.querySelector("#submitBut");
signup.addEventListener('click', (event)=> {
    showMessage("My name is Deep Patel", 'username')
})

const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")

