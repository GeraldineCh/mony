/**

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

reference = database.ref("users").child(0);
addUser(reference,"Liliana", "lili143", "lili7@gmail.com", "987927897", "10012345656", "Av. San Isido N°774" , " SAC",  "Venta calzado" , "Calzados Jorgito SAC", "Representante legal", "part1", "descripcion", "objetivo", "20 000", "1500", "25");

function addUser(reference1, name, password, email, phone, ruc, address, type, tradename, businessname, position, partners, description, objetive, amountrequired, amountraised, inversors){
  var obj = {
    "user": {
      "name": name,
      "password": password,
      "email": email,
      "phone": phone
    },
    "cia": {
      "ruc": ruc,
      "business-name": businessname,
      "type": type,
      "trade-name": tradename,
      "address": address,
      "position": position,
      "partners": partners
    },
    "proyecto": {
      "description": description,
      "objetive": objetive,
      "amount-required": amountrequired,
      "amount-raised": amountraised,
      "inversors": inversors
    }
  };
  reference.update(obj);
}

 **/