import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBA3FAnNkcWf8dvf9_MeBnwc7nNf-HkY3k",
    authDomain: "hospital-playlist.firebaseapp.com",
    projectId: "hospital-playlist",
    storageBucket: "hospital-playlist.appspot.com",
    messagingSenderId: "765469232623",
    appId: "1:765469232623:web:1394c2778c2d278ab43a1a",
    measurementId: "G-X2FW0RLMT0"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;