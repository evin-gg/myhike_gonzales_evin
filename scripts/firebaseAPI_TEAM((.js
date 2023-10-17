//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAoB_L8wAbYvJD-TBrjNC98ulN-3yZ0z88",
    authDomain: "gonzales-evin-demo07.firebaseapp.com",
    projectId: "gonzales-evin-demo07",
    storageBucket: "gonzales-evin-demo07.appspot.com",
    messagingSenderId: "481396946906",
    appId: "1:481396946906:web:047e7fd3a5d606a68132e3",
    measurementId: "G-HW2E1SCPDK"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();