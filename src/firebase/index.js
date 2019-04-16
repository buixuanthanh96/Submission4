import Vue from 'vue'
import VueFire from 'vuefire'
import firebase from 'firebase'

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA0s_zjoc77l0wAMZPxwvg-Gcmb2PM3hPU",
    authDomain: "submission4-be0ac.firebaseapp.com",
    databaseURL: "https://submission4-be0ac.firebaseio.com",
    projectId: "submission4-be0ac",
    storageBucket: "submission4-be0ac.appspot.com",
    messagingSenderId: "708464373169"
})

// export const db = firebaseApp.database();
