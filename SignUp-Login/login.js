 
                // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
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
  
  import{ getDatabase, ref, set, child, get}
        from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

        const database = getDatabase();
       
        //-----------------------------------------------THE REFERENCES---------------------------------------------------//
    
          const username = document.getElementById("userInp");
            const pass = document.getElementById("passInp");
            const submit = document.getElementById("sub_btn");

//------------------------------------------AUTHENTICATION PROCESS-----------------------------------------//

              function AuthenticateUser(){
                const dbRef = ref(getDatabase());   

get(child(dbRef, "UsersList/"+ username.value)).then((snapshot)=>{    
 if (snapshot.exists()) {
  let dbpass = snapshot.val().Password;
 

  var loginname = snapshot.val().Name;
  var loginemail = snapshot.val().Email;
  var loginuser = snapshot.val().Username;
 
  
  if(dbpass == pass.value){
    window.location = "mainpage1.html";
  }
  else{
    swal({
  title: "Incorrect Password!",
  text: "Enter a Correct Password!",
  icon: "warning",
  button: "OK",
});
  }
 }
else{
  swal({
  title: "Invalid!",
  text: "Username or Password is Invalid!",
  icon: "warning",
  button: "OK",
});
}

});

 }  
 

 //---------------------------------ASSIGN THE EVENTS------------------------------------//

 submit.addEventListener("click", AuthenticateUser);




