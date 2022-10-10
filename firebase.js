// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMPAGio5eHYa7GZOvSlnzZr9KOUenvDPM",
  authDomain: "school-management-webapp1.firebaseapp.com",
  projectId: "school-management-webapp1",
  storageBucket: "school-management-webapp1.appspot.com",
  messagingSenderId: "277964251907",
  appId: "1:277964251907:web:bd690e4bee6844ba3d3f36"
};

// if(!getApps().length){
  const app =   initializeApp(firebaseConfig);
// }

// const app = getApp(firebaseConfig)
const auth = getAuth(app);

export default {app, auth}