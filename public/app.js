'use strict';

const state = {
  users : null
}

$( _ => {
  // Inicialización del Firebase
  var config = {
    apiKey: "AIzaSyCcxON3o7U44BBuen1VzVn8MQicwtbf1qA",
    authDomain: "mony-test.firebaseapp.com",
    databaseURL: "https://mony-test.firebaseio.com",
    projectId: "mony-test",
    storageBucket: "mony-test.appspot.com",
    messagingSenderId: "947896289488"
  };
  firebase.initializeApp(config);

  //Base de datos
  const db = firebase.database();
  //Referencia
  var reference = null;

  //Referencia
  // var reference = db.ref('users/1');
  //Envío de datos
  // const result = $('#result');
  //   reference.set(
  //  {
  //    'user': {
  //      'name': 'miriam',
  //      'full_name':'miriam mendoza',
  //      'password': '12345',
  //      'email': 'miriam.mendoza@gmail.com',
  //      'phone': null
  //    }
  //  }, _ => {
  //    console.log('El registro se ha realizado correctamente');
  //  });

  //Obtener datos del usuario
  $('#register').on('click', _ => {
    var user = $('#name').val();
    var pass = $('#password').val();

    reference = db.ref().child('users');
    reference.on('value', snap => {
    state.users = snap.val();
    console.log(state.users);
    });
  });
});
