 // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyC2fvtbvwZGzD7nureoInVMQ17lltoPjj4",
          authDomain: "laundrywalaa-09.firebaseapp.com",
          projectId: "laundrywalaa-09",
          storageBucket: "laundrywalaa-09.appspot.com",
          messagingSenderId: "670634560436",
          appId: "1:670634560436:web:8985a88f2c467a8672c0e1",
          measurementId: "G-P71DZWCQQ5"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
