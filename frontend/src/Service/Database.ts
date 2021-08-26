import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyB55UnjxZ0ie6ZZxB3dNSyoXzlIBf2R8Dw",
    authDomain: "mobilus-1c605.firebaseapp.com",
    databaseURL: "https://mobilus-1c605-default-rtdb.firebaseio.com",
    projectId: "mobilus-1c605",
    storageBucket: "mobilus-1c605.appspot.com",
    messagingSenderId: "60578673044",
    appId: "1:60578673044:web:7c3c41628b5a4bcf771f81"
};
  
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export {database, firebase}