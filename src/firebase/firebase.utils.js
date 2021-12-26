import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCbRya0_1BMfnbUNBmcoe7rL1mRjp-pIGw",
  authDomain: "ztm-shop-db.firebaseapp.com",
  projectId: "ztm-shop-db",
  storageBucket: "ztm-shop-db.appspot.com",
  messagingSenderId: "839950897042",
  appId: "1:839950897042:web:2cb26a90a688cfbe95bb4b",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
