import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAswNfywM6G2W4RUhgjtVALbmmeNfxV2Tc",
  authDomain: "flametracker-38ae1.firebaseapp.com",
  databaseURL: "https://flametracker-38ae1-default-rtdb.firebaseio.com",
  projectId: "flametracker-38ae1",
  storageBucket: "flametracker-38ae1.appspot.com",
  messagingSenderId: "456752901192",
  appId: "1:456752901192:web:94f7cd989e18e437f2fc7d",
  measurementId: "G-BHVKJ8S8E2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
