import firebase from 'firebase/app';
import 'firebase/firestore'
import "firebase/auth";

// Get a Firestore instance
export const db = firebase
  .initializeApp({  
    apiKey: "AIzaSyA-yOx6yYkcsCSK5kIffXt5_Cue7-ZaLmI",
    authDomain: "notas-app-f5b3d.firebaseapp.com",
    databaseURL: "https://notas-app-f5b3d.firebaseio.com",
    projectId: "notas-app-f5b3d",
    storageBucket: "notas-app-f5b3d.appspot.com",
    messagingSenderId: "989237850176",
    appId: "1:989237850176:web:56ff53f51616ee0338afa5",
    measurementId: "G-VFBBEP14V2" 
  }).firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export {firebase};