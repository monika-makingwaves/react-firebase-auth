import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

let firebaseApi;

if (!firebase.apps.length) {
  firebaseApi = firebase.initializeApp(config);
}


const authFirebase = firebaseApi.auth();

export {
  authFirebase
}