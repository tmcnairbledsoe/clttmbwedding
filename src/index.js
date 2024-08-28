import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./components/Router";
import { CookiesProvider } from "react-cookie";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_PROJECTID + ".appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var database = getDatabase(app);

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
    <Router database = {database}/>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);