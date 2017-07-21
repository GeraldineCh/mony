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


reference1 = database.ref("users");
addUser(reference1,"Liliana", "lili123", "lili@sds.com", "987987897", "10012345656", "Expasión tienda de calzado", "sac", "Galeria El Ovalo", "Av. Las Gadernias", "Representante legal", "part1", "sad", "descripcion", "objetivo", "20 000", "1500", "25");


function addUser(reference1,name, password, email, phone, ruc, bname, type, tradename, address, position, partners, pname, description, objetive, amountrequired, amountraised, inversors){
  var obj = {
    "user": {
      "name": name,
      "password": password,
      "email": email,
      "phone": phone
    },
    "cia": {
      "ruc": ruc,
      "business-name": bname,
      "type": type,
      "trade-name": tradename,
      "address": address,
      "position": position,
      "partners": partners
    },
    "proyecto": {
      "name": pname,
      "description": description,
      "objetive": objetive,
      "amount-required": amountrequired,
      "amount-raised": amountraised,
      "inversors": inversors
    }
  };
  reference1.set(obj);
}