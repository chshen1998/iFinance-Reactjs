import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCQnyM-d0rQGqnyHyKmySVWa3AF55JBg-M",
  authDomain: "ifinance-reactjs.firebaseapp.com",
  databaseURL: "https://ifinance-reactjs.firebaseio.com",
  projectId: "ifinance-reactjs",
  storageBucket: "ifinance-reactjs.appspot.com",
  messagingSenderId: "782200703249",
  appId: "1:782200703249:web:c42ae52495da1ebb20e4b0",
  measurementId: "G-WRMJW5B3XZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
