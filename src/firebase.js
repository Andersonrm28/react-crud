import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAqT8httLXcupe7M2Z9Fx5jSMdXYZ_fGB4",
    authDomain: "react-crud-ea28.firebaseapp.com",
    projectId: "react-crud-ea28",
    storageBucket: "react-crud-ea28.appspot.com",
    messagingSenderId: "61864018114",
    appId: "1:61864018114:web:1848a37ad3ac9b052ffb5b"
  };
  
  // Initialize Firebase
  export const firebaseApp = initializeApp(firebaseConfig)