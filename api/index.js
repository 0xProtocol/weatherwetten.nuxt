const express = require('express')
const app = express()

import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";
const firebaseConfig = {
  storageBucket: "weatherwetten-4ad9c.appspot.com",
  apiKey: "AIzaSyCC5C4C57eUS6EXEfFx8yeWWBqBQ23OO3s",
  messagingSenderId: "426562372824",
  appId: "1:426562372824:web:fa152b660cf973cfd683ad",
  projectId: "weatherwetten-4ad9c",
  authDomain: "weatherwetten-4ad9c.firebaseapp.com",

};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

app.get("/test", (req, res) => {
  res.send({message: "Test API Endpoint"})
})

app.get("/leaderboard", (req, res)=>{
  const docRef = db.collection('/users');
})


module.exports = {
  path: '/api',
  handler: app
}


