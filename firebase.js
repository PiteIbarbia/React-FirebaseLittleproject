require("firebase/firestore");
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAJw4NLl67_X_0ESc_suoRis5oCDgKxSFU",
    authDomain: "react-intro-blog-d2e19.firebaseapp.com",
    projectId: "react-intro-blog-d2e19",
    storageBucket: "react-intro-blog-d2e19.appspot.com",
    messagingSenderId: "21637737905",
    appId: "1:21637737905:web:192729e50c806837372190"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export const auth = firebase.auth();
  export const firestore = firebase.firestore;
  export default db;