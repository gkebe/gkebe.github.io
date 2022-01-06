  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCjGOSDJmwE0F87Ph1TXMsKa9NuULEJ_88",
    authDomain: "alfredvideos-abf34.firebaseapp.com",
    projectId: "alfredvideos-abf34",
    storageBucket: "alfredvideos-abf34.appspot.com",
    messagingSenderId: "435180116034",
    appId: "1:435180116034:web:891a8ae45f28f4739975db",
    measurementId: "G-ZWVY2RDNMD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);