import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// read env variables
const apiKey = process.env.FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "hospital-playlist.firebaseapp.com",
  projectId: "hospital-playlist",
  storageBucket: "hospital-playlist.appspot.com",
  messagingSenderId: "765469232623",
  appId: "1:765469232623:web:1394c2778c2d278ab43a1a",
  measurementId: "G-X2FW0RLMT0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
