import firebase from './firebase/compat/auth'
import 'firebase/compat/auth'


export const app = firebase.initializeApp({
    "projectId": "proyecto-dos-autenticacion",
    "appId": "1:764407581000:web:720cda441f204b1a1c4b7d",
    "storageBucket": "proyecto-dos-autenticacion.appspot.com",
    "locationId": "europe-west",
    "apiKey": "AIzaSyD4EwTYtV9t9Q2icfMjwjJ_dHuZFZsBYgk",
    "authDomain": "proyecto-dos-autenticacion.firebaseapp.com",
    "messagingSenderId": "764407581000"
  });