import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAmPC76S94wr9lypLfRXhmA4mTVy9xg6JE",
  authDomain: "fir-practice-fc211.firebaseapp.com",
  projectId: "fir-practice-fc211",
  storageBucket: "fir-practice-fc211.appspot.com",
  messagingSenderId: "930892896102",
  appId: "1:930892896102:web:ec5385d1a23853e9661aa7"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)