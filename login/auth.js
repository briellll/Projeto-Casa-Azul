/* Importação do firebase */

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnZ5hjZkaSYWCyFTFlX8oj0R2oTmoG8JQ",
  authDomain: "site-casa-azul.firebaseapp.com",
  projectId: "site-casa-azul",
  storageBucket: "site-casa-azul.appspot.com",
  messagingSenderId: "767221469467",
  appId: "1:767221469467:web:adba4b662835c9188143be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);