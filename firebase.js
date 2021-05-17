import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCff6n-UzG_3Lu54YMXUcXLcwXkLVzcLYQ",
  authDomain: "whatsapp-e0fe8.firebaseapp.com",
  projectId: "whatsapp-e0fe8",
  storageBucket: "whatsapp-e0fe8.appspot.com",
  messagingSenderId: "272626363713",
  appId: "1:272626363713:web:4582f51f8cbc85568d85c0",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
