import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHBmzc7ZkG6LT86xNPp7Z0ZY8chwcL-o8",
    authDomain: "tinder-clone-d569f.firebaseapp.com",
    databaseURL: "https://tinder-clone-d569f.firebaseio.com",
    projectId: "tinder-clone-d569f",
    storageBucket: "tinder-clone-d569f.appspot.com",
    messagingSenderId: "329102690526",
    appId: "1:329102690526:web:e9db66ae9729126b069a4f",
    measurementId: "G-LJ020WHSH7"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);

  const database = firebaseapp.firestore();

  export default database;