import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD6h074bLMERaiVj6fi41kQuNSdrWfrryI",
  authDomain: "crwon-db-2b502.firebaseapp.com",
  databaseURL: "https://crwon-db-2b502.firebaseio.com",
  projectId: "crwon-db-2b502",
  storageBucket: "crwon-db-2b502.appspot.com",
  messagingSenderId: "627506738442",
  appId: "1:627506738442:web:9bdad03b7fb5c8989eb6f3",
  measurementId: "G-1R8XSEW6R5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
