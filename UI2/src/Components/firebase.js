import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyAElW9tRjjHh1MOfrX_PgOhDUxz6ZKg-QY",
    authDomain: "dht11-mq3-firebase.firebaseapp.com",
    databaseURL:
      "https://dht11-mq3-firebase-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dht11-mq3-firebase",
    storageBucket: "dht11-mq3-firebase.appspot.com",
    messagingSenderId: "284920532927",
    appId: "1:284920532927:web:006843d2f8506c89a75b0a",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
