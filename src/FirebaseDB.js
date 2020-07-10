import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDAcxh6gzz6zT6d3MK2q-ytvCyaclqM_aE",
  authDomain: "ifinance-15147.firebaseapp.com",
  databaseURL: "https://ifinance-15147.firebaseio.com",
  projectId: "ifinance-15147",
  storageBucket: "ifinance-15147.appspot.com",
  messagingSenderId: "174142725555",
  appId: "1:174142725555:web:45a212e7362fa3bd273fc6",
  measurementId: "G-DCW536N4VG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase