import firebase from 'firebase';

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

  var firebaseRef = firebase.database().ref();

  // firebaseRef.set({
  //   appName: 'Todo App',
  //   isRunning: true,
  //   user: {
  //     name: 'Carl',
  //     age: 27
  //   }
  // }).then(() => {
  //   console.log('Set worked!');
  // }, (e) =>{
  //   console.log('Set failed!');
  // })

  // firebaseRef.set({
  //   appName: 'Todo Application',
  // })

  // firebaseRef.child('user').set({
  //   name: 'Mike'
  // })

  firebaseRef.set({
     Name: {
       name: 'Todo App',
       version: 1.00
     },
     isRunning: true,
     user: {
       name: 'Carl',
       age: 27
     }
   });

  // firebaseRef.update({
  //   isRunning: false,
  //   'Name/name': 'Todo Application'
  // });

  // firebaseRef.child('Name').update({
  //   name: 'Todo Application'
  // }).then(()=> {
  //   console.log('Update worked!');
  // },(e) => {
  //   console.log('Update failed');
  // })

  //Challenge #1 for updating
  // firebaseRef.update({
  //   isRunning: false,
  //   'Name/name': 'Todo Application',
  //   'user/name': 'Akito Tenkawa'
  // });

  //Challenge #2 for updating
  // firebaseRef.child('Name').update({
  //   name: 'Todo Application'
  // }).then(()=> {
  //   console.log('Update worked!');
  // },(e) => {
  //   console.log('Update failed');
  // })
  //
  // firebaseRef.child('user').update({
  //   name: 'Akito Tenkawa'
  // }).then(()=> {
  //   console.log('Update worked!');
  // },(e) => {
  //   console.log('Update failed');
  // })

  // firebaseRef.child('user/age').remove();
  // firebaseRef.child('app').update({
  //   version: '2.0',
  //   name: null
  // });

  //Challenge 3 for deletion
  // firebaseRef.update({
  //   isRunning: null
  // });
  //
  // firebaseRef.child('user/age').remove();

  //Fetching the database
  // firebaseRef.child('Name').once('value').then((snapshot) => {
  //   console.log('Got entire database',snapshot.key, snapshot.val());
  // }, (e) => {
  //   console.log('Unable to fetch value', e);
  // });

  //Listens for changes in databse
  // var logData = (snapshot) => {
  //   console.log('Got value', snapshot.val());
  // };
  //
  // firebaseRef.on('value', logData);
  //
  // firebaseRef.off();
  //
  // firebaseRef.update({isRunning: false});

  //Challenge 4 for listening
  // var logData = (snapshot) => {
  //   console.log('Got value', snapshot.val());
  // };
  //
  // firebaseRef.on('value', logData);
  //
  // firebaseRef.child('user').update({name: 'Chitose'});
  //
  // firebaseRef.child('Name').update({name: 'Super Robot Wars'});

  //Working with Firebase database
  //var notesRef = firebaseRef.child('notes');
  // notesRef.on('child_added', (snapshot) => {
  //   console.log('child_added', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_changed', (snapshot) => {
  //   console.log('child_changed', snapshot.key, snapshot.val());
  // });
  //
  // notesRef.on('child_removed', (snapshot) => {
  //   console.log('child_removed', snapshot.key, snapshot.val());
  // });
  //
  // var newNoteRef = notesRef.push({
  //   text: 'Walk the dog!'
  // });
  //
  // console.log('Todo id', newNoteRef.key);
  /*
  newNoteRef.set({
    text: 'Walk the dog'
  });*/

  var todosRef = firebaseRef.child('todos');
  todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
  });

  var newtodosRef = todosRef.push({
    text: 'Play my games!'
  });
