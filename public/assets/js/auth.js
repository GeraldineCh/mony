var funcionFb = function ingresarFb () {
  console.log("jla");
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    console.log(provider);
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

}

var funcionGg = function ingresarGoogle () {
  console.log("jla");
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/plus.login');
  console.log(provider);
  firebase.auth().signInWithPopup(provider).then(function (result) {
    console.log("entraste Google");
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function (error) {
    console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

document.getElementById("loginFace").addEventListener("click", funcionFb);
document.getElementById("loginGoog").addEventListener("click", funcionGg);