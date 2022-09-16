// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaJDtx5bjZwGje1Um9F_DKHbv8rrNn61s',
  authDomain: 'alreno-api-404ac.firebaseapp.com',
  projectId: 'alreno-api-404ac',
  storageBucket: 'alreno-api-404ac.appspot.com',
  messagingSenderId: '577100102178',
  appId: '1:577100102178:web:927df278314690d0a3287b',
  measurementId: 'G-WH9HSQ9MTC',
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
firebase.firestore().settings({experimentalForceLongPolling: true});
export const db = firebase.firestore();
export {auth};
