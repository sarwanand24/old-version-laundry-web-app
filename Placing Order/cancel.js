
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

        import{ getDatabase, ref, set, child, get, push, update, remove }
        from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

        const database = getDatabase();

        var order50 = localStorage.getItem("order40");
            document.getElementById("boobs").innerHTML= order50;
   


        document.getElementById("lastcancel").addEventListener("click", function(){


           
            var order80 = localStorage.getItem("order70");

            const db = getDatabase();
  set(ref(db, "OrdersList/"+ order80),{
    Name: "cancelled",
    Mobile_No :"cancelled" ,
    Address: "cancelled",
   House_No : "cancelled",
   Pin_Code: "cancelled",
  })
  .then(()=>{

        alert("Your Order has been cancelled");
        window.location="mainpage1.html";

  })
  .catch((error)=>{
    alert("error, please try again");
  });
   
})

