import { initializeApp } from "firebase/app";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAayvJqsMqXc1FK3vg1TMuLOM6UR2g9h84",
  authDomain: "website-storage-74225.firebaseapp.com",
  projectId: "website-storage-74225",
  storageBucket: "website-storage-74225.appspot.com",
  messagingSenderId: "32339138874",
  databaseURL:
    "https://website-storage-74225-default-rtdb.europe-west1.firebasedatabase.app",
  appId: "1:32339138874:web:0a5168dc151bbf6ea2d803",
};

const firebaseClient = initializeApp(firebaseConfig);

type AuthObserverArgs = (onUser?: () => void, cleanup?: () => void) => Auth;

const authObserver: AuthObserverArgs = (onUser, cleanup) => {
  const auth = getAuth(firebaseClient);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (onUser) onUser();
    } else {
      if (cleanup) cleanup();
    }
  });

  return auth;
};

export { firebaseClient, authObserver };
