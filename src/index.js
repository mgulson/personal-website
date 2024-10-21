import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// firebaseApps previously initialized using initializeApp()


const root = ReactDOM.createRoot(document.getElementById('root'));

// const db = getFirestore(app)


root.render(
  <React.StrictMode>
     <App />
 </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
