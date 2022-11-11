import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCsJIlQJpQ8y_IhoyHYiOEikaFlO_lH-5M",
  authDomain: "uee-images.firebaseapp.com",
  projectId: "uee-images",
  storageBucket: "uee-images.appspot.com",
  messagingSenderId: "826490169355",
  appId: "1:826490169355:web:f8a0a579710f8680d7bf0e",
  measurementId: "G-E07TBD7W8J",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
