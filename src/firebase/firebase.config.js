import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCRc_tfj-gJE7HvVxJ-2rTtOtQY3hjAxR4",
  authDomain: "special-tea-with-backend.firebaseapp.com",
  projectId: "special-tea-with-backend",
  storageBucket: "special-tea-with-backend.appspot.com",
  messagingSenderId: "567622475308",
  appId: "1:567622475308:web:a5bb36a31401320667bb89"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth