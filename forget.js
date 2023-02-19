
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword , sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyBRuDnDHxsv0G47Rg1t-zQGSwU38F0Oqec",
  authDomain: "mywebsite-96e48.firebaseapp.com",
  projectId: "mywebsite-96e48",
  storageBucket: "mywebsite-96e48.appspot.com",
  messagingSenderId: "344749155287",
  appId: "1:344749155287:web:12721c6707801c2adbe192",
  measurementId: "G-52SD7LMBWP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

document.getElementById("reset").addEventListener("click", function() {
  var reset =  document.getElementById("email1").value;
  sendPasswordResetEmail(auth,reset)
  .then(() => {
    alert("reset mail sent");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    alert(error);
  });		  		  
});
