const express = require('express')
const app = express()


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = { // Have the firebase config here
  apiKey: "AIzaSyCC5C4C57eUS6EXEfFx8yeWWBqBQ23OO3s",
  authDomain: "weatherwetten-4ad9c.firebaseapp.com",
  projectId: "weatherwetten-4ad9c",
  storageBucket: "weatherwetten-4ad9c.appspot.com",
  messagingSenderId: "426562372824",
  appId: "1:426562372824:web:fa152b660cf973cfd683ad"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

app.get("/test", (req, res) => {
  res.send({message: "Test API Endpoint"})
})


module.exports = {
  path: '/api',
  handler: app
}


