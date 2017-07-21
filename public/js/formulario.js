'use strict';

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
  var reference = null;

  //Evento register
  $('#js-register').on('click', _ => {
    var email = $('#js-email').val();
    var password = $('#js-password').val();

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    state.email = email;
    state.password  = password;
    location.href="welcome.html";
    promise.catch(e => console.log(e.message));
  });

  //Evento login
  $('#js-login').on('click', _ => {
    var email = $('#email').val();
    var password = $('#password').val();
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    state.email = email;
    state.password  = password;
    promise.catch(e => console.log(e.message));
    location.href="welcome.html";
  });

  //Evento login con facebook
  $('#js-login_fb').on('click', _ => {
     var provider = new firebase.auth.FacebookAuthProvider();
     provider.addScope('public_profile');
     firebase.auth().signInWithPopup(provider).then((result) => {
       var token = result.credential.accessToken;
       var user = result.user;
       state.name = null;
       state.email = null;
       console.log(user);
       location.href="welcome.html";
     }).catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       var email = error.email;
       var credential = error.credential;
     });
  });

  //Evento login con google
  $('#js-login_g').on('click', _ => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then((result) =>{
      console.log("entraste Google");
      var token = result.credential.accessToken;
      var user = result.user;
      state.name = null;
      state.email = null;
      console.log(user);
      location.href="welcome.html";
    }).catch(function (error) {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  });

  //Evento logout
  $('#js-logout').on('click', _ => {
    firebase.auth().signOut();
  });
  //Actulizando cambios de login
  firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('no logueado');
    }
  });
});
