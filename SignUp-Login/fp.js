         
        // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
import { getAuth, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCDqQzRmuFOXQgfc12PIxzCDcHIJcIUW0I",
authDomain: "laundry-walaa.firebaseapp.com",
projectId: "laundry-walaa",
storageBucket: "laundry-walaa.appspot.com",
messagingSenderId: "164078565347",
appId: "1:164078565347:web:f7169029dad99f15fa52d6",
measurementId: "G-54QCKHK71N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import{ getDatabase, ref, child, get}
from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

const database = getDatabase();
const auth = getAuth(app);


const email = document.getElementById("emailInp");
const submit = document.getElementById("sub");


function Sendemail(){

    const auth = getAuth();
sendPasswordResetEmail(auth, email.value)
  .then(() => {
    // Password reset email sent!
    // ..
    swal("Password reset email has been sent to you please check");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}


submit.addEventListener("click", Sendemail);
