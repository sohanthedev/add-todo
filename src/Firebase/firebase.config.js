// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq3n_3c4B1FrQRSF8gSQ3g5a48PCOH9Kw",
  authDomain: "add-to-do-e8b37.firebaseapp.com",
  projectId: "add-to-do-e8b37",
  storageBucket: "add-to-do-e8b37.appspot.com",
  messagingSenderId: "765953865614",
  appId: "1:765953865614:web:c1ffddc16b9d7d7cad96df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const storage = getStorage(app);