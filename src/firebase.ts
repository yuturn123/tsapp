import firebase from "firebase/app"; // * as firebase ではうまくいかない
import "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseApp = firebase.initializeApp({

});

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
