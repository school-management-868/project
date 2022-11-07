// // Import the functions you need from the SDKs you need
// import { initializeApp, getApp, getApps } from "firebase/app";
// import { getAuth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCMPAGio5eHYa7GZOvSlnzZr9KOUenvDPM",
//   authDomain: "school-management-webapp1.firebaseapp.com",
//   projectId: "school-management-webapp1",
//   storageBucket: "school-management-webapp1.appspot.com",
//   messagingSenderId: "277964251907",
//   appId: "1:277964251907:web:bd690e4bee6844ba3d3f36",
// };
// if (!getApps().length) {
//   initializeApp(firebaseConfig);
//   console.log("running >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// }
// const app = getApp();
// const auth = getAuth(app);

// export default { app, auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPAGio5eHYa7GZOvSlnzZr9KOUenvDPM",
  authDomain: "school-management-webapp1.firebaseapp.com",
  projectId: "school-management-webapp1",
  storageBucket: "school-management-webapp1.appspot.com",
  messagingSenderId: "277964251907",
  appId: "1:277964251907:web:bd690e4bee6844ba3d3f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export default app;