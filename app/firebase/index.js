import firebase from 'firebase';

try{
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAm3v_ra2pLulvcVAxwgjUFPpWQ5EAY92s",
      authDomain: "carl-todo-app.firebaseapp.com",
      databaseURL: "https://carl-todo-app.firebaseio.com",
      projectId: "carl-todo-app",
      storageBucket: "carl-todo-app.appspot.com",
      messagingSenderId: "1083199955270"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
