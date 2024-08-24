import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAtrvA9THXmD8jgouf5l49bsvYcviKFUkE",
  authDomain: "dogaturizm-5858.firebaseapp.com",
  projectId: "dogaturizm-5858",
  storageBucket: "dogaturizm-5858.appspot.com",
  messagingSenderId: "497195980589",
  appId: "1:497195980589:web:8fe580664b0783478da5a4",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app)
