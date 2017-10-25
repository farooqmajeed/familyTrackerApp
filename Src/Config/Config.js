import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCVsR8A9MzWWOIwUfCvlnTbs-EUNC0OeGY",
    authDomain: "auth-ea25d.firebaseapp.com",
    databaseURL: "https://auth-ea25d.firebaseio.com",
    projectId: "auth-ea25d",
    storageBucket: "auth-ea25d.appspot.com",
    messagingSenderId: "1025463423566"
};
firebase.initializeApp(config);

export const database = firebase.database();

export const auth = firebase.auth();

export default firebase;