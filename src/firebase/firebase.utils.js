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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date()
    

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }
    catch (error) {
      console.log('error created User', error.message)
    }
  }

    return userRef
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
