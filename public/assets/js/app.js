// Initialize Firebase
var config = {
  apiKey: "AIzaSyCcxON3o7U44BBuen1VzVn8MQicwtbf1qA",
  authDomain: "mony-test.firebaseapp.com",
  databaseURL: "https://mony-test.firebaseio.com",
  projectId: "mony-test",
  storageBucket: "mony-test.appspot.com",
  messagingSenderId: "947896289488"
};

firebase.initializeApp(config);

let database = firebase.database();
let reference = database.ref("users/0");

reference.update(
  {
    "user": {
      "name": "Miguel Angel Gónzalo",
      "password": "malvarez@desarrolloweb.com",
      "email": "miguelAngel@gmai.com",
      "phone": "934456823"
    },
    "cia": {
      "ruc": "10012",
      "business-name": "Labs ",
      "type": "SOCIEDAD ANÓNIMA",
      "trade-name": "Supermercados",
      "address": "AV. SAN LUIS NRO. 600 LIMA SAN ISIDRO",
      "position": "Represetante legal",
      "partners": {
        0: {
          "dni": "04561267",
          "name": "José Perez Gónzales"
        },
        1: {
          "dni": "03451298",
          "name": "Maria Prado Martinez"
        }
      }
    },
    "proyecto": {
      "name": "Expansión de ventas de zapatillas",
      "description": "Negocio local de ventas de zapatillas deportivas",
      "objetive": "Aperturar una tienda en Arequipa",
      "amount-required": "S/. 10 000.00",
      "amount-raised": "S/. 2500.00",
      "inversors": "15"
    }
  }
  ,function()
  {
    alert('El alta se ha realizado correctamente');
  });
