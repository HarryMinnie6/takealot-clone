import firebase from 'firebase'


  // Initialize Firebase
  const firebaseApp = firebase.initializeApp({
    //copied from the firebase config page/section
    apiKey: "AIzaSyBeM5lGRMwULoDGS6obyz7mqL1r8Mi1BAw",
    authDomain: "takealot-clone.firebaseapp.com",
    databaseURL: "https://takealot-clone.firebaseio.com",
    projectId: "takealot-clone",
    storageBucket: "takealot-clone.appspot.com",
    messagingSenderId: "548090497376",
    appId: "1:548090497376:web:4884a3d2545395d977b605",
    measurementId: "G-RHK3GK988G"
  });
  
//   const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth};