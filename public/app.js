'use strict';

const state = {
  users : null
}

$( _ => {
  // Inicialización de Firebase
  var config = {
    apiKey: "AIzaSyCcxON3o7U44BBuen1VzVn8MQicwtbf1qA",
    authDomain: "mony-test.firebaseapp.com",
    databaseURL: "https://mony-test.firebaseio.com",
    projectId: "mony-test",
    storageBucket: "mony-test.appspot.com",
    messagingSenderId: "947896289488"
  };
  firebase.initializeApp(config);
  const db = firebase.database();
  var ref = null;

  // Evento login
  $('#login').on('click', _ => {
    var email = $('#email').val();
    var password = $('#password').val();
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

  $('#register').on('click', _ => {
    var email = $('#email').val();
    var password = $('#password').val();
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch(e => console.log(e.message));
  });

  $('#logout').on('click', _ => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('no logueado');
    }
  });
});


// const loadUsers = (db, ref) => {
//   var reference = db.ref().child(ref);
//   reference.on('value', snap => {
//   state.users = snap.val();
//   });
// }
// const validateUser = (username, password) => {
//   var result = (state.users).filter(function(data) {
//       return username == data.user.name && password == data.user.password;
//   });
//   if (result.length == 0) {
//     return console.log('Usuario o contraseña incorrecto');
//   }
//   return console.log(('Contraseña correcta'));
// }
