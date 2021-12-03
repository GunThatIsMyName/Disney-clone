import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAOoPkHH55bBxCRmORXcuMzFBpcTPCIzZw",
  authDomain: "disneyplus-clone-ab789.firebaseapp.com",
  projectId: "disneyplus-clone-ab789",
  storageBucket: "disneyplus-clone-ab789.appspot.com",
  messagingSenderId: "178265101578",
  appId: "1:178265101578:web:72c21c70fb2eda6a0396f3",
  measurementId: "G-RKT970HK5N",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { db,auth,googleProvider,storage };
