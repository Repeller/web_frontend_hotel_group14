import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './page/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from "react-router-dom";

import { Provider } from 'react-redux'; // redix
import { initializeApp } from "firebase/app"; // firebase
import { getDatabase } from 'firebase/database'; // firebase

// firebase
const keys = require('./firebaseKey.json');
const firebaseConfig = {
  apiKey: keys.apiKey,
  authDomain: keys.authDomain,
  projectId: keys.projectId,
  storageBucket: keys.storageBucket,
  messagingSenderId: keys.messagingSenderId,
  appId: keys.appId
};

// redux
// const firstState = {
//   floors: [[22, "sal 1"], [33, "sal 2"], [44, "sal 3"]],
//   rooms: 
//   [[1, "c1", 22, 31], [2, "c2", 22, 33], [3, "c3", 22, 34], 
//   [4, "d1", 33, 32], [5, "d2", 33, 32], [6, "d3", 33, 34],
//   [7, "q1", 44, 31], [8, "q2", 44, 33], [9, "q3", 44, 34]],
//   r_types: [[31, "budget"], [32, "normal"], [33, "business"] ,[34, "VIP"]],
// }

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db)


ReactDOM.render(


  <React.StrictMode>
    <App/>

  </React.StrictMode>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
