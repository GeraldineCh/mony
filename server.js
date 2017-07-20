const express = require('express');
const app = express();
// USA ARCHIVOS ESTÁTICOS  Y SE MUESTRAN AL LLAMAR A LA RUTA "/"
app.use('/', express.static('public'));

app.listen(3000, () => {
  console.log("Listening on 3000");
})
