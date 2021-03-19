import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyASR8WbZgYjK0lFP5I6lYd5IWXC_YuwOT8",
    authDomain: "gpss-b7623.firebaseapp.com",
    projectId: "gpss-b7623",
    storageBucket: "gpss-b7623.appspot.com",
    messagingSenderId: "329896327037",
    appId: "1:329896327037:web:83231d2cb43ff8740c7e14"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
firebase.firestore().settings({ experimentalForceLongPolling: true });
export { firebase };