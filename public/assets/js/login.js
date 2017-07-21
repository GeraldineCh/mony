'use strict';

$( document ).ready(function() 
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
  var database = firebase.database();

  var reference = database.ref("users").child(5);

  //Evento login
  $('#js-login').on('click', function(){
    var name = $('#js-username').val();
    var email = $('#js-email').val();
    var password = $('#js-password').val();
    addUser(name, email, password);
  });

  //Evento login con facebook
  $('#js-login_fb').on('click', function(){
     var provider = new firebase.auth.FacebookAuthProvider();
     provider.addScope('public_profile');
     firebase.auth().signInWithPopup(provider).then(function(result){
       var token = result.credential.accessToken;
       var user = result.user;
       addUser(user.displayName, user.email, null);
     }).catch(function(error){
       var errorCode = error.code;
       var errorMessage = error.message;
       var email = error.email;
       var credential = error.credential;
     });
  });

  //Evento login con google
  $('#js-login_g').on('click', function (){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then( function(result){
      console.log("entraste Google");
      var token = result.credential.accessToken;
      var user = result.user;
      state.user.name = user.displayName;
      state.user.email = user.email;
      console.log(user);
      addUser(user.displayName, user.email, null);
    }).catch(function (error) {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  });

  //Evento logout
  $('#js-logout').on('click', function() {
    firebase.auth().signOut();
  });
  //Actulizando cambios de login
  firebase.auth().onAuthStateChanged( function firebaseUser() {
    if(firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('no logueado');
    }
  });
});

function addUser(name, email, pass) {
  localStorage.setItem("username", name);
  localStorage.setItem("email", email);
  localStorage.setItem("pass", pass);
  location.href="welcome_user.html";
}