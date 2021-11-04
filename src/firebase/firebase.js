import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyA0n6puY1C5Gqlaos4oZeLi34lAcnx6dWs",
    authDomain: "crown-15472.firebaseapp.com",
    projectId: "crown-15472",
    storageBucket: "crown-15472.appspot.com",
    messagingSenderId: "280771162533",
    appId: "1:280771162533:web:7bb337acf6634a07bc784c",
    measurementId: "G-DXQB1NEW86"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;