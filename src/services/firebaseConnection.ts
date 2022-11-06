import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



let firebaseConfig = {
    apiKey: "AIzaSyDmJjSnirK-8aWClfIpHvZcPuI4UoEima8",
    authDomain: "boardapp-45287.firebaseapp.com",
    projectId: "boardapp-45287",
    storageBucket: "boardapp-45287.appspot.com",
    messagingSenderId: "844723802865",
    appId: "1:844723802865:web:b01c3001a101dd69d54f50",
    measurementId: "G-QHN0G7ZPW5"
  };
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;


//   export const app = firebase.initializeApp(firebaseConfig);
//   export const database = getFirestore(app);